<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-32 bg-gradient-to-br from-gray-50 to-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up font-poppins">
            Entre em <span class="text-[#0194DA]">Contato</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 animate-fade-in-up animation-delay-200">
            Solicite orçamentos, tire suas dúvidas ou conheça nossos produtos para termoplásticos
          </p>
        </div>
      </div>
    </section>

    <!-- Seção de Contato Principal -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Formulário de Contato -->
          <div class="animate-slide-in-left">
            <div class="card-promaster p-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-6 font-poppins">
                Solicite seu Orçamento
              </h2>
              <form @submit.prevent="submitForm" class="space-y-6">
                <!-- Nome -->
                <div>
                  <label for="nome" class="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    id="nome"
                    v-model="form.nome"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0194DA] focus:border-transparent outline-none transition-all"
                    placeholder="Digite seu nome completo"
                  />
                </div>

                <!-- Email -->
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0194DA] focus:border-transparent outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <!-- Telefone -->
                <div>
                  <label for="telefone" class="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    id="telefone"
                    v-model="form.telefone"
                    type="tel"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0194DA] focus:border-transparent outline-none transition-all"
                    placeholder="(41) 3011-0777"
                  />
                </div>

                <!-- Empresa -->
                <div>
                  <label for="empresa" class="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    id="empresa"
                    v-model="form.empresa"
                    type="text"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0194DA] focus:border-transparent outline-none transition-all"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <!-- Assunto -->
                <div>
                  <label for="assunto" class="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="assunto"
                    v-model="form.assunto"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0194DA] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="pigmentos">Pigmentos</option>
                    <option value="aditivos">Aditivos</option>
                    <option value="resinas-reciclaveis">Resinas Recicláveis</option>
                    <option value="identificacao-cor">Identificação de Cor</option>
                    <option value="orcamento">Solicitar Orçamento</option>
                    <option value="entrega">Prazo de Entrega</option>
                    <option value="representacao">Representação Comercial</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <!-- Mensagem -->
                <div>
                  <label for="mensagem" class="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    v-model="form.mensagem"
                    rows="5"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0194DA] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Descreva suas necessidades de pigmentos, aditivos ou resinas. Informe quantidades, especificações técnicas ou outras informações relevantes..."
                  ></textarea>
                </div>

                <!-- Botão Enviar -->
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full btn-promaster text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Icon v-if="isSubmitting" name="mdi:loading" class="animate-spin mr-2" />
                  {{ isSubmitting ? 'Enviando...' : 'Solicitar Orçamento' }}
                </button>
              </form>

              <!-- Mensagem de Sucesso -->
              <div v-if="showSuccess" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div class="flex items-center">
                  <Icon name="mdi:check-circle" class="text-green-600 mr-2" />
                  <p class="text-green-800 font-medium">
                    Solicitação enviada com sucesso! Nossa equipe entrará em contato em breve com seu orçamento.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Informações de Contato -->
          <div class="animate-slide-in-right">
            <div class="space-y-8">
              <!-- PROMASTER CURITIBA -->
              <div class="card-promaster p-8 mb-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">PROMASTER CURITIBA</h3>
                <div class="space-y-4">
                  <!-- Endereço -->
                  <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0">
                      <div class="w-12 h-12 bg-[#0194DA]/10 rounded-lg flex items-center justify-center">
                        <Icon name="mdi:map-marker" class="text-xl text-[#0194DA]" />
                      </div>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-1">Endereço</h4>
                      <p class="text-gray-600">
                        R. Dep. João Ribeiro Júnior, 94<br>
                        Administração Regional da Cidade Industrial de Curitiba<br>
                        Curitiba - PR, 81350-220
                      </p>
                    </div>
                  </div>

                  <!-- Telefone -->
                  <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0">
                      <div class="w-12 h-12 bg-[#0194DA]/10 rounded-lg flex items-center justify-center">
                        <Icon name="mdi:phone" class="text-xl text-[#0194DA]" />
                      </div>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-1">Telefone</h4>
                      <p class="text-gray-600">(41) 3011-0777</p>
                    </div>
                  </div>

                  <!-- WhatsApp -->
                  <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0">
                      <div class="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                        <Icon name="mdi:whatsapp" class="text-xl text-green-500" />
                      </div>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                      <a href="https://api.whatsapp.com/send?phone=5541998573333" target="_blank" class="text-green-600 hover:text-green-700 transition-colors">
                        (41) 99857-3333
                      </a>
                    </div>
                  </div>

                  <!-- Horário -->
                  <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0">
                      <div class="w-12 h-12 bg-[#0194DA]/10 rounded-lg flex items-center justify-center">
                        <Icon name="mdi:clock" class="text-xl text-[#0194DA]" />
                      </div>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-1">Horário de Atendimento</h4>
                      <p class="text-gray-600">
                        08h - 12h e 13h15 - 18h
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- PROMASTER MARINGÁ -->
              <div class="card-promaster p-8 mb-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">PROMASTER MARINGÁ</h3>
                <div class="space-y-4">
                  <!-- Endereço -->
                  <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0">
                      <div class="w-12 h-12 bg-[#0194DA]/10 rounded-lg flex items-center justify-center">
                        <Icon name="mdi:map-marker" class="text-xl text-[#0194DA]" />
                      </div>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-1">Endereço</h4>
                      <p class="text-gray-600">
                        Rua: Pioneiro Arlindo Pedralli, 1967<br>
                        Jardim Santa Helena<br>
                        Maringá - PR, 87083-327
                      </p>
                    </div>
                  </div>

                  <!-- Telefone -->
                  <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0">
                      <div class="w-12 h-12 bg-[#0194DA]/10 rounded-lg flex items-center justify-center">
                        <Icon name="mdi:phone" class="text-xl text-[#0194DA]" />
                      </div>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-1">Telefone</h4>
                      <p class="text-gray-600">(44) 3253-4723</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- PROMASTER CASCAVEL -->
              <div class="card-promaster p-8 mb-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">PROMASTER CASCAVEL</h3>
                <div class="space-y-4">
                  <!-- Endereço -->
                  <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0">
                      <div class="w-12 h-12 bg-[#0194DA]/10 rounded-lg flex items-center justify-center">
                        <Icon name="mdi:map-marker" class="text-xl text-[#0194DA]" />
                      </div>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-1">Endereço</h4>
                      <p class="text-gray-600">
                        Av. Aracy Tanaka Biazetto, 9930<br>
                        BRCAO 04 - Parque São Paulo<br>
                        Cascavel - PR, 85803-971
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Contato Geral -->
              <div class="card-promaster p-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Contato Geral</h3>
                <div class="space-y-4">
                  <!-- Email -->
                  <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0">
                      <div class="w-12 h-12 bg-[#0194DA]/10 rounded-lg flex items-center justify-center">
                        <Icon name="mdi:email" class="text-xl text-[#0194DA]" />
                      </div>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-1">E-mail</h4>
                      <p class="text-gray-600">contato@promaster.eco.br</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Redes Sociais -->
              <div class="card-promaster p-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Siga-nos</h3>
                <div class="flex space-x-4">
                  <a href="#" class="w-12 h-12 bg-[#0194DA]/10 rounded-lg flex items-center justify-center hover:bg-[#0194DA] hover:text-white transition-colors group">
                    <Icon name="mdi:linkedin" class="text-xl text-[#0194DA] group-hover:text-white" />
                  </a>
                  <a href="#" class="w-12 h-12 bg-[#0194DA]/10 rounded-lg flex items-center justify-center hover:bg-[#0194DA] hover:text-white transition-colors group">
                    <Icon name="mdi:instagram" class="text-xl text-[#0194DA] group-hover:text-white" />
                  </a>
                  <a href="#" class="w-12 h-12 bg-[#0194DA]/10 rounded-lg flex items-center justify-center hover:bg-[#0194DA] hover:text-white transition-colors group">
                    <Icon name="mdi:facebook" class="text-xl text-[#0194DA] group-hover:text-white" />
                  </a>
                  <a href="#" class="w-12 h-12 bg-[#0194DA]/10 rounded-lg flex items-center justify-center hover:bg-[#0194DA] hover:text-white transition-colors group">
                    <Icon name="mdi:twitter" class="text-xl text-[#0194DA] group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Perguntas <span class="text-[#0194DA]">Frequentes</span>
          </h2>
          <p class="text-xl text-gray-600">
            Esclareça suas dúvidas antes de entrar em contato
          </p>
        </div>

        <div class="max-w-3xl mx-auto space-y-4">
          <!-- FAQ Item 1 -->
          <div class="card-promaster overflow-hidden">
            <button
              @click="toggleFaq(0)"
              class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span class="font-semibold text-gray-900">Quais são os prazos de entrega dos produtos?</span>
              <Icon :name="openFaq === 0 ? 'mdi:chevron-up' : 'mdi:chevron-down'" class="text-[#0194DA]" />
            </button>
            <div v-show="openFaq === 0" class="px-6 pb-4">
              <p class="text-gray-600">
                <strong>Curitiba:</strong> Entrega expressa em até 30 minutos para produtos em estoque.<br>
                <strong>Maringá e Cascavel:</strong> Entrega em até 2 dias úteis.<br>
                Mantemos aproximadamente 150 toneladas de produtos à pronta entrega em nosso estoque.
              </p>
            </div>
          </div>

          <!-- FAQ Item 2 -->
          <div class="card-promaster overflow-hidden">
            <button
              @click="toggleFaq(1)"
              class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span class="font-semibold text-gray-900">Como funciona o serviço de identificação de cores?</span>
              <Icon :name="openFaq === 1 ? 'mdi:chevron-up' : 'mdi:chevron-down'" class="text-[#0194DA]" />
            </button>
            <div v-show="openFaq === 1" class="px-6 pb-4">
              <p class="text-gray-600">
                Temos um laboratório próprio para identificação de cores com equipamentos especializados. 
                Você pode enviar uma amostra da cor desejada e nossos técnicos farão a análise para encontrar 
                o pigmento mais adequado. Este serviço garante precisão na cor e qualidade do produto final.
              </p>
            </div>
          </div>

          <!-- FAQ Item 3 -->
          <div class="card-promaster overflow-hidden">
            <button
              @click="toggleFaq(2)"
              class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span class="font-semibold text-gray-900">Quais tipos de produtos vocês comercializam?</span>
              <Icon :name="openFaq === 2 ? 'mdi:chevron-up' : 'mdi:chevron-down'" class="text-[#0194DA]" />
            </button>
            <div v-show="openFaq === 2" class="px-6 pb-4">
              <p class="text-gray-600">
                Somos especializados em três principais linhas de produtos para termoplásticos:<br>
                <strong>• Pigmentos:</strong> Ampla variedade de cores para termoplásticos<br>
                <strong>• Aditivos:</strong> Produtos que melhoram propriedades e qualidade final<br>
                <strong>• Resinas Recicláveis:</strong> Materiais sustentáveis de alta qualidade
              </p>
            </div>
          </div>

          <!-- FAQ Item 4 -->
          <div class="card-promaster overflow-hidden">
            <button
              @click="toggleFaq(3)"
              class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span class="font-semibold text-gray-900">Qual é a cobertura de atendimento da Promaster?</span>
              <Icon :name="openFaq === 3 ? 'mdi:chevron-up' : 'mdi:chevron-down'" class="text-[#0194DA]" />
            </button>
            <div v-show="openFaq === 3" class="px-6 pb-4">
              <p class="text-gray-600">
                Atendemos todo o estado do Paraná com três unidades estrategicamente localizadas:<br>
                <strong>• Curitiba:</strong> Sede principal com laboratório e maior estoque<br>
                <strong>• Maringá:</strong> Unidade para atendimento da região norte<br>
                <strong>• Cascavel:</strong> Unidade para atendimento da região oeste<br>
                Trabalhamos com produtos do Brasil inteiro, levando variedade até você.
              </p>
            </div>
          </div>

          <!-- FAQ Item 5 -->
          <div class="card-promaster overflow-hidden">
            <button
              @click="toggleFaq(4)"
              class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span class="font-semibold text-gray-900">Como solicitar um orçamento?</span>
              <Icon :name="openFaq === 4 ? 'mdi:chevron-up' : 'mdi:chevron-down'" class="text-[#0194DA]" />
            </button>
            <div v-show="openFaq === 4" class="px-6 pb-4">
              <p class="text-gray-600">
                Para solicitar um orçamento, você pode:<br>
                • Preencher o formulário de contato nesta página especificando os produtos desejados<br>
                • Ligar diretamente para uma de nossas unidades<br>
                • Enviar um e-mail para contato@promaster.eco.br<br>
                Precisaremos de informações como tipo de produto, quantidade e especificações técnicas.
              </p>
            </div>
          </div>

          <!-- FAQ Item 6 -->
          <div class="card-promaster overflow-hidden">
            <button
              @click="toggleFaq(5)"
              class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span class="font-semibold text-gray-900">Vocês oferecem suporte técnico?</span>
              <Icon :name="openFaq === 5 ? 'mdi:chevron-up' : 'mdi:chevron-down'" class="text-[#0194DA]" />
            </button>
            <div v-show="openFaq === 5" class="px-6 pb-4">
              <p class="text-gray-600">
                Sim! Nossa equipe técnica oferece suporte especializado em termoplásticos, incluindo:<br>
                • Orientação sobre aplicação dos produtos<br>
                • Identificação de cores no laboratório<br>
                • Recomendações técnicas para melhor resultado<br>
                • Suporte pós-venda para dúvidas e ajustes<br>
                Temos conhecimento especializado com mais de 6 anos de experiência no mercado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 gradient-promaster">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
            Pronto para conhecer nossos produtos?
          </h2>
          <p class="text-xl text-white/90 mb-8">
            Entre em contato conosco e descubra como podemos atender suas necessidades em termoplásticos
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://api.whatsapp.com/send?phone=5541998573333&text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20de%20produtos%20para%20termoplásticos." target="_blank" class="bg-white text-[#0194DA] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover-lift inline-flex items-center justify-center">
              <Icon name="mdi:whatsapp" class="mr-2" />
              Enviar mensagem WhatsApp
            </a>
            <a href="mailto:contato@promaster.eco.br" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0194DA] transition-all duration-300 inline-flex items-center justify-center">
              <Icon name="mdi:email" class="mr-2" />
              Enviar E-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Estado do formulário
const form = ref({
  nome: '',
  email: '',
  telefone: '',
  empresa: '',
  assunto: '',
  mensagem: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)
const openFaq = ref(null)

// Função para enviar formulário
const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset do formulário
    form.value = {
      nome: '',
      email: '',
      telefone: '',
      empresa: '',
      assunto: '',
      mensagem: ''
    }
    
    showSuccess.value = true
    
    // Esconder mensagem de sucesso após 5 segundos
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Erro ao enviar formulário:', error)
  } finally {
    isSubmitting.value = false
  }
}

// Função para toggle FAQ
const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index
}

// SEO Meta Tags
useHead({
  title: 'Contato - Promaster Distribuidora | Pigmentos e Termoplásticos no Paraná',
  meta: [
    { name: 'description', content: 'Entre em contato com a Promaster Distribuidora. Solicite orçamentos de pigmentos, aditivos e resinas para termoplásticos. Atendemos Curitiba, Maringá e Cascavel-PR.' },
    { name: 'keywords', content: 'contato promaster, pigmentos paraná, termoplásticos curitiba, aditivos maringá, resinas cascavel, orçamento, distribuidora' },
    { property: 'og:title', content: 'Contato - Promaster Distribuidora | Pigmentos e Termoplásticos' },
    { property: 'og:description', content: 'Fale conosco para pigmentos, aditivos e resinas. Laboratório próprio e estoque à pronta entrega no Paraná.' }
  ]
})
</script>

<style scoped>
.animation-delay-200 {
  animation-delay: 0.2s;
}
</style> 