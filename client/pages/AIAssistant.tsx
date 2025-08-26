import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Bot, User, ExternalLink, Loader2, Search, ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { bpsData, searchBPSData, getSuggestions, getCategories, detectSpecificKeywords, BPSDataItem } from "@/data/bpsData";

interface Message {
  id: string;
  content: string;
  type: "user" | "assistant";
  timestamp: Date;
  sources?: Array<{
    title: string;
    url: string;
  }>;
  relatedData?: BPSDataItem[];
}

interface ConversationContext {
  previousTopics: string[];
  userPreferences: string[];
  conversationCount: number;
}

interface QuestionCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  questions: string[];
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<BPSDataItem[]>([]);
  const [showQuestionGuide, setShowQuestionGuide] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [context, setContext] = useState<ConversationContext>({
    previousTopics: [],
    userPreferences: [],
    conversationCount: 0
  });
  const [searchParams] = useSearchParams();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Structured question categories based on BPS data
  const questionCategories: QuestionCategory[] = [
    {
      id: "demografi",
      title: "📊 Demografi & Sosial",
      icon: "👥",
      description: "Pertanyaan tentang kependudukan, tenaga kerja, pendidikan, dan kesehatan",
      questions: [
        "Berapa jumlah penduduk Kota Medan tahun 2023?",
        "Bagaimana tingkat pengangguran di Medan?",
        "Data pendidikan di Kota Medan",
        "Statistik kesehatan masyarakat Medan",
        "Informasi tentang migrasi penduduk",
        "Data konsumsi dan pendapatan rumah tangga"
      ]
    },
    {
      id: "ekonomi",
      title: "💰 Ekonomi",
      icon: "📈",
      description: "Data ekonomi makro, inflasi, perdagangan, dan bisnis",
      questions: [
        "Tingkat inflasi Kota Medan 2024",
        "Pertumbuhan ekonomi Medan tahun ini",
        "Data harga-harga konsumen",
        "Statistik perdagangan internasional",
        "Informasi sektor bisnis dan industri",
        "Data perbankan dan keuangan"
      ]
    },
    {
      id: "sektoral",
      title: "🏭 Sektoral",
      icon: "🏢",
      description: "Data sektor khusus seperti pertanian, transportasi, pariwisata",
      questions: [
        "Statistik pertanian di Medan",
        "Data transportasi dan mobilitas",
        "Informasi sektor pariwisata",
        "Statistik energi dan konsumsi",
        "Data pertambangan dan manufaktur",
        "Perkembangan teknologi dan inovasi"
      ]
    },
    {
      id: "lingkungan",
      title: "🌿 Lingkungan & Multi-Domain",
      icon: "🌍",
      description: "Data lingkungan, kemiskinan, gender, dan pembangunan berkelanjutan",
      questions: [
        "Kondisi lingkungan hidup Medan",
        "Data kemiskinan dan kesejahteraan",
        "Statistik gender dan populasi khusus",
        "Indikator pembangunan berkelanjutan",
        "Data globalisasi dan MDGs",
        "Informasi masyarakat informasi"
      ]
    }
  ];

  // Greeting messages when first time visiting
  useEffect(() => {
    if (messages.length === 0) {
      const greetingMessage: Message = {
        id: "greeting-" + Date.now(),
        content: getGreetingMessage(),
        type: "assistant",
        timestamp: new Date()
      };
      setMessages([greetingMessage]);
      
      // Show question guide automatically for new users
      setTimeout(() => setShowQuestionGuide(true), 2000);
    }
  }, []);

  useEffect(() => {
    const queryParam = searchParams.get('q');
    if (queryParam && messages.length <= 1) {
      setInput(queryParam);
      handleSubmit(queryParam);
    }
  }, [searchParams, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Live search suggestions as user types
  useEffect(() => {
    if (input.length >= 2) {
      const newSuggestions = getSuggestions(input);
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [input]);

  const getGreetingMessage = (): string => {
    const categories = getCategories();
    const greetings = [
      `Halo! 👋 Saya AI Data Assistant BPS Kota Medan! Saya terhubung dengan ${bpsData.length} dataset resmi yang mencakup ${categories.length} kategori utama.\n\n🎯 Tips Bertanya yang Efektif: *\n• Gunakan kata kunci spesifik (contoh: "penduduk", "inflasi", "kesehatan")\n• Sebutkan tahun jika ingin data periode tertentu\n• Pilih kategori di bawah untuk pertanyaan terstruktur\n\nApa yang ingin Anda ketahui tentang Kota Medan? 🤔`,
      
      `Selamat datang di AI Data Assistant BPS! 😊\n\n📋 **Cara Menggunakan:**\n1. Ketik pertanyaan langsung atau pilih kategori\n2. Gunakan kata kunci seperti "data", "statistik", "jumlah"\n3. Saya akan mencarikan dataset yang tepat\n\n💡 **Contoh pertanyaan yang baik:**\n• "Berapa jumlah penduduk Medan 2023?"\n• "Data inflasi terbaru"\n• "Tingkat pengangguran di Medan"\n\nSilakan mulai bertanya! 🚀`,
      
      `Hai! Senang bertemu Anda! 🌟\n\nSaya adalah AI Assistant khusus untuk mengakses data BPS Kota Medan. Database saya berisi informasi lengkap tentang:\n\n📊 **Demografi & Sosial** - Penduduk, Tenaga Kerja, Pendidikan\n💰 **Ekonomi** - Inflasi, Perdagangan, Bisnis\n🏭 **Sektoral** - Pertanian, Transportasi, Pariwisata\n🌿 **Lingkungan** - Lingkungan Hidup, Kemiskinan, Gender\n\nKlik tombol "?" untuk melihat panduan pertanyaan terstruktur! 💬`
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  };

  const detectQuestionType = (question: string): string => {
    const lower = question.toLowerCase();
    if (lower.includes('halo') || lower.includes('hai') || lower.includes('hello')) return 'greeting';
    if (lower.includes('terima kasih') || lower.includes('thanks')) return 'thanks';
    if (lower.includes('siapa') || lower.includes('who') || lower.includes('kamu siapa') || lower.includes('anda siapa')) return 'identity';
    if (lower.includes('bagaimana') || lower.includes('cara')) return 'how';
    if (lower.includes('mengapa') || lower.includes('kenapa')) return 'why';
    if (lower.includes('kapan') || lower.includes('when')) return 'when';
    if (lower.includes('berapa') || lower.includes('jumlah')) return 'quantity';
    if (lower.includes('list') || lower.includes('daftar') || lower.includes('kategori')) return 'list';
    return 'information';
  };

  const findRelevantData = (question: string): BPSDataItem[] => {
    // First try exact keyword detection for highest accuracy
    const keywordResults = detectSpecificKeywords(question);
    if (keywordResults.length > 0) {
      return keywordResults.slice(0, 5);
    }
    
    // Then try regular search with improved scoring
    const results = searchBPSData(question);
    
    if (results.length > 0) {
      return results.slice(0, 5); // Limit to 5 most relevant results
    }
    
    // If still no results, try individual words (fallback)
    const words = question.toLowerCase().split(' ').filter(word => word.length > 2);
    const partialResults: BPSDataItem[] = [];
    
    for (const word of words) {
      const wordResults = detectSpecificKeywords(word);
      if (wordResults.length > 0) {
        partialResults.push(...wordResults);
      } else {
        const searchResults = searchBPSData(word);
        partialResults.push(...searchResults.slice(0, 2)); // Limit per word
      }
    }
    
    // Remove duplicates and return top 3
    const uniqueResults = partialResults.filter((item, index, self) => 
      index === self.findIndex(t => t.subject_id === item.subject_id)
    );
    
    return uniqueResults.slice(0, 3);
  };

  const generatePersonalizedResponse = (question: string, questionType: string, relevantData: BPSDataItem[]): string => {
    const isReturnUser = context.conversationCount > 3;
    let response = "";
    
    // Handle different question types with personality
    switch (questionType) {
      case 'greeting':
        const greetingResponses = [
          "Halo juga! 😊 Senang bertemu dengan Anda! Saya terhubung dengan database lengkap BPS Kota Medan. Ada topik statistik khusus yang ingin Anda eksplorasi?",
          "Hai! Selamat datang kembali di AI Data Assistant BPS! 👋 Bagaimana kabar Anda? Mari kita jelajahi data statistik bersama!",
          "Hello! Terima kasih sudah menyapa! 🌟 Saya sangat antusias membantu Anda menemukan informasi statistik yang akurat dan terpercaya."
        ];
        return greetingResponses[Math.floor(Math.random() * greetingResponses.length)];
        
      case 'thanks':
        const thanksResponses = [
          "Sama-sama! 😊 Saya senang bisa membantu. Database BPS masih banyak yang bisa dieksplorasi, jangan ragu untuk bertanya lagi ya!",
          "Dengan senang hati! 🌟 Itulah tugas saya - menghubungkan Anda dengan data statistik resmi BPS. Ada topik lain yang ingin dibahas?",
          "Tidak masalah! 👍 Saya selalu siap membantu mengakses informasi dari database BPS yang lengkap. Semoga bermanfaat!"
        ];
        return thanksResponses[Math.floor(Math.random() * thanksResponses.length)];
        
      case 'identity':
        const identityResponses = [
          "Saya adalah AI Data Assistant khusus untuk BPS Kota Medan! 🤖 Saya diciptakan untuk membantu Anda mengakses dan mencari data statistik resmi BPS dengan mudah. Saya terhubung dengan database lengkap yang berisi 37 dataset dari 3 kategori utama. Bagaimana saya bisa membantu Anda hari ini?",
          "Halo! Saya AI Assistant yang dikembangkan khusus untuk melayani kebutuhan informasi statistik BPS Kota Medan! 🌟 Tugas saya adalah membantu Anda menemukan data yang tepat dari koleksi lengkap dataset BPS. Ada data statistik yang sedang Anda cari?",
          "Perkenalkan, saya AI Data Assistant BPS Kota Medan! 👋 Saya adalah asisten virtual yang dirancang untuk memudahkan akses ke data statistik resmi. Dengan database yang terintegrasi langsung dengan portal BPS, saya siap membantu Anda menemukan informasi apapun tentang Kota Medan!"
        ];
        return identityResponses[Math.floor(Math.random() * identityResponses.length)];
        
      case 'list':
        const categories = getCategories();
        response = `Tentu! 📋 BPS Kota Medan memiliki ${categories.length} kategori utama statistik:\n\n`;
        categories.forEach((category, index) => {
          response += `${index + 1}. ${category}\n`;
        });
        response += `\nSetiap kategori memiliki berbagai sub-topik yang bisa Anda eksplorasi. Mau tahu lebih detail tentang kategori mana? 🤔`;
        return response;
    }

    // Add contextual intro based on conversation history
    if (isReturnUser) {
      const returnIntros = [
        "Senang Anda kembali bertanya! 😊 ",
        "Saya lihat Anda cukup aktif mencari informasi statistik, bagus sekali! 👍 ",
        "Wah, sepertinya Anda sangat tertarik dengan data BPS ya! 📊 "
      ];
      response += returnIntros[Math.floor(Math.random() * returnIntros.length)];
    }

    // Generate response based on found data
    if (relevantData.length > 0) {
      const primaryResult = relevantData[0];
      
      const foundResponses = [
        `Perfect! Saya menemukan dataset yang tepat untuk pertanyaan Anda! 🎯`,
        `Excellent! Ada informasi BPS yang sesuai dengan yang Anda cari! ✨`,
        `Bagus! Saya punya data statistik yang relevan untuk topik ini! 📊`,
        `Great! Database BPS memiliki informasi lengkap tentang hal ini! 🌟`
      ];
      
      response += foundResponses[Math.floor(Math.random() * foundResponses.length)];
      response += `\n\n**📋 Dataset: "${primaryResult.title}"**\n\n`;
      response += `${primaryResult.description}\n\n`;
      
      if (relevantData.length > 1) {
        response += `Saya juga menemukan ${relevantData.length - 1} dataset terkait lainnya yang mungkin menarik untuk Anda eksplorasi. `;
      }
      
      response += `Klik link di bawah untuk mengakses data lengkap dari portal resmi BPS! 🔗`;
      
    } else {
      // No specific data found, provide helpful guidance
      const helpfulResponses = [
        `Hmm, pertanyaan yang menarik! 🤔 Saya belum menemukan dataset yang persis cocok, tapi jangan khawatir! Coba gunakan **Panduan Pertanyaan** di bawah untuk struktur yang lebih baik.`,
        `Terima kasih sudah bertanya! 😊 Untuk hasil yang lebih akurat, coba klik tombol **"?"** untuk melihat contoh pertanyaan terstruktur berdasarkan kategori.`,
        `Pertanyaan yang bagus! 💭 Mungkin informasi yang Anda cari bisa ditemukan dengan keyword yang lebih spesifik. Gunakan **Panduan Kategori** untuk bantuan!`
      ];
      
      response += helpfulResponses[Math.floor(Math.random() * helpfulResponses.length)];
      response += `\n\n💡 **Tips:**\n• Gunakan kata kunci spesifik\n• Coba kategori di Panduan Pertanyaan\n• Sebutkan tahun jika perlu data periode tertentu`;
    }

    return response;
  };

  const handleSubmit = async (question?: string) => {
    const currentInput = question || input;
    if (!currentInput.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: currentInput,
      type: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setSuggestions([]); // Clear suggestions
    setIsLoading(true);
    setShowQuestionGuide(false); // Hide guide when user starts asking

    // Update conversation context
    setContext(prev => ({
      ...prev,
      previousTopics: [...prev.previousTopics, currentInput].slice(-5),
      conversationCount: prev.conversationCount + 1
    }));

    // Simulate realistic processing time
    const processingTime = Math.random() * 1000 + 1500; // 1.5-2.5 seconds

    setTimeout(() => {
      const questionType = detectQuestionType(currentInput);
      const relevantData = findRelevantData(currentInput);
      const responseContent = generatePersonalizedResponse(currentInput, questionType, relevantData);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responseContent,
        type: "assistant",
        timestamp: new Date(),
        sources: relevantData.length > 0 ? relevantData.map(item => ({
          title: item.title,
          url: item.url
        })) : questionType !== 'greeting' && questionType !== 'thanks' ? [
          {
            title: "Portal Resmi BPS Kota Medan",
            url: "https://medankota.bps.go.id/id"
          }
        ] : undefined,
        relatedData: relevantData.length > 0 ? relevantData : undefined
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, processingTime);
  };

  const handleQuestionClick = (question: string) => {
    setInput(question);
    handleSubmit(question);
    setShowQuestionGuide(false);
  };

  const handleSuggestionClick = (suggestion: BPSDataItem) => {
    const query = suggestion.title;
    setInput(query);
    handleSubmit(query);
  };

  const toggleQuestionGuide = () => {
    setShowQuestionGuide(!showQuestionGuide);
    setSelectedCategory(null);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              AI Data Assistant
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Terhubung dengan {bpsData.length} dataset resmi BPS Kota Medan. Gunakan panduan pertanyaan untuk hasil yang lebih akurat!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Enhanced Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">
                      📋 Panduan Pertanyaan
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleQuestionGuide}
                      className="text-bps-secondary hover:bg-bps-gray"
                    >
                      <HelpCircle className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Quick Categories */}
                  <div className="space-y-2 mb-6">
                    {questionCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(
                          selectedCategory === category.id ? null : category.id
                        )}
                        className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-bps-secondary hover:bg-bps-gray transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-gray-900 text-sm">
                              {category.title}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {category.description.substring(0, 50)}...
                            </div>
                          </div>
                          {selectedCategory === category.id ? (
                            <ChevronUp className="h-4 w-4 text-gray-400" />
                          ) : (
                            <ChevronDown className="h-4 w-4 text-gray-400" />
                          )}
                        </div>
                        
                        {selectedCategory === category.id && (
                          <div className="mt-3 space-y-1">
                            {category.questions.map((question, qIndex) => (
                              <button
                                key={qIndex}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleQuestionClick(question);
                                }}
                                className="w-full text-left p-2 text-xs text-gray-600 hover:text-bps-secondary hover:bg-white rounded transition-colors"
                              >
                                💬 {question}
                              </button>
                            ))}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-medium text-gray-900 mb-2">📊 Database Info</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>• {bpsData.length} Dataset Tersedia</p>
                      <p>• {getCategories().length} Kategori Utama</p>
                      <p>• Data Resmi BPS</p>
                      <p>• Update Berkala</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Chat Interface */}
            <div className="lg:col-span-3">
              <Card className="h-[600px] flex flex-col">
                {/* Chat Messages */}
                <div className="flex-1 p-6 overflow-y-auto space-y-4">
                  {/* Question Guide Overlay */}
                  {showQuestionGuide && (
                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-blue-900 flex items-center">
                            <HelpCircle className="h-4 w-4 mr-2" />
                            Panduan Pertanyaan Terstruktur
                          </h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setShowQuestionGuide(false)}
                            className="text-blue-600 hover:bg-blue-100"
                          >
                            ✕
                          </Button>
                        </div>
                        
                        <p className="text-blue-800 text-sm mb-4">
                          Pilih kategori di bawah untuk melihat contoh pertanyaan yang dapat membantu Anda:
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {questionCategories.map((category) => (
                            <button
                              key={category.id}
                              onClick={() => setSelectedCategory(category.id)}
                              className="p-3 bg-white border border-blue-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-left"
                            >
                              <div className="font-medium text-blue-900 text-sm">
                                {category.icon} {category.title.replace(/^📊|💰|🏭|🌿/, '').trim()}
                              </div>
                              <div className="text-xs text-blue-600 mt-1">
                                {category.questions.length} contoh pertanyaan
                              </div>
                            </button>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`flex max-w-[80%] ${
                          message.type === "user" ? "flex-row-reverse" : "flex-row"
                        }`}
                      >
                        <div
                          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                            message.type === "user" 
                              ? "bg-bps-chat-user text-white ml-3" 
                              : "bg-bps-chat-ai text-gray-600 mr-3"
                          }`}
                        >
                          {message.type === "user" ? (
                            <User className="h-4 w-4" />
                          ) : (
                            <Bot className="h-4 w-4" />
                          )}
                        </div>
                        <div
                          className={`p-4 rounded-lg ${
                            message.type === "user"
                              ? "bg-bps-chat-user text-white"
                              : "bg-bps-chat-ai border border-gray-200 text-bps-text-primary"
                          }`}
                        >
                          <p className="whitespace-pre-wrap">{message.content}</p>
                          
                          {/* Related Data Display */}
                          {message.relatedData && message.relatedData.length > 1 && (
                            <div className="mt-3 pt-3 border-t border-gray-200">
                              <p className="text-sm font-medium text-gray-700 mb-2">Data Terkait:</p>
                              <div className="space-y-1">
                                {message.relatedData.slice(1).map((data, index) => (
                                  <a
                                    key={index}
                                    href={data.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-sm text-bps-secondary hover:underline p-2 bg-gray-50 rounded"
                                  >
                                    📋 {data.title}
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {/* Sources Display */}
                          {message.sources && (
                            <div className="mt-3 pt-3 border-t border-gray-200">
                              <p className="text-sm font-medium text-gray-700 mb-2">Akses Data:</p>
                              <div className="space-y-1">
                                {message.sources.map((source, index) => (
                                  <a
                                    key={index}
                                    href={source.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-sm text-bps-secondary hover:underline font-medium"
                                  >
                                    <ExternalLink className="h-3 w-3 mr-1" />
                                    {source.title}
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-bps-chat-ai text-gray-600 mr-3 flex items-center justify-center">
                          <Bot className="h-4 w-4" />
                        </div>
                        <div className="bg-bps-chat-ai border border-gray-200 p-4 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <Loader2 className="h-4 w-4 animate-spin text-bps-secondary" />
                            <span className="text-gray-600">Mencari data di database BPS...</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="border-t border-gray-200 p-6">
                  {/* Live Suggestions */}
                  {suggestions.length > 0 && (
                    <div className="mb-4 bg-gray-50 rounded-lg p-3">
                      <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                        <Search className="h-4 w-4 mr-1" />
                        Saran Dataset:
                      </h4>
                      <div className="space-y-1">
                        {suggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="w-full text-left p-2 text-sm text-gray-600 hover:text-bps-secondary hover:bg-white rounded transition-colors"
                          >
                            📊 {suggestion.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Quick Action Buttons */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowQuestionGuide(true)}
                      className="text-bps-secondary border-bps-secondary hover:bg-bps-gray"
                    >
                      <HelpCircle className="h-3 w-3 mr-1" />
                      Panduan Pertanyaan
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuestionClick("Daftar semua kategori data BPS")}
                      className="text-gray-600 hover:bg-gray-100"
                    >
                      📋 Lihat Kategori
                    </Button>
                  </div>
                  
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                    className="flex space-x-4"
                  >
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Contoh: Berapa jumlah penduduk Medan 2023? atau pilih kategori di atas..."
                      className="flex-1"
                      disabled={isLoading}
                    />
                    <Button
                      type="submit"
                      disabled={!input.trim() || isLoading}
                      className="bg-bps-secondary hover:bg-bps-button-hover"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
