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
            Vamos conversar sobre como podemos ajudar seu negócio a crescer
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
                Envie sua Mensagem
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
                    placeholder="(11) 99999-9999"
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
                    <option value="desenvolvimento-web">Desenvolvimento Web</option>
                    <option value="aplicacao-mobile">Aplicação Mobile</option>
                    <option value="solucoes-nuvem">Soluções em Nuvem</option>
                    <option value="business-intelligence">Business Intelligence</option>
                    <option value="ciberseguranca">Cibersegurança</option>
                    <option value="automacao">Automação de Processos</option>
                    <option value="consultoria">Consultoria</option>
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
                    placeholder="Conte-nos mais sobre seu projeto ou necessidade..."
                  ></textarea>
                </div>

                <!-- Botão Enviar -->
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full btn-promaster text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Icon v-if="isSubmitting" name="mdi:loading" class="animate-spin mr-2" />
                  {{ isSubmitting ? 'Enviando...' : 'Enviar Mensagem' }}
                </button>
              </form>

              <!-- Mensagem de Sucesso -->
              <div v-if="showSuccess" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div class="flex items-center">
                  <Icon name="mdi:check-circle" class="text-green-600 mr-2" />
                  <p class="text-green-800 font-medium">
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Informações de Contato -->
          <div class="animate-slide-in-right">
            <div class="space-y-8">
              <!-- Contatos Diretos -->
              <div class="card-promaster p-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Fale Conosco</h3>
                <div class="space-y-6">
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
                      <p class="text-gray-600">comercial@promaster.eco.br</p>
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
                      <p class="text-gray-600">(11) 3000-0000</p>
                      <p class="text-gray-600">(11) 99999-9999</p>
                    </div>
                  </div>

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
                        Av. Paulista, 1000<br>
                        São Paulo, SP - 01310-100<br>
                        Brasil
                      </p>
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
                        Segunda a Sexta: 8h às 18h<br>
                        Sábado: 8h às 12h
                      </p>
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
          <!-- FAQ Item -->
          <div class="card-promaster overflow-hidden">
            <button
              @click="toggleFaq(0)"
              class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span class="font-semibold text-gray-900">Qual é o tempo médio de entrega dos projetos?</span>
              <Icon :name="openFaq === 0 ? 'mdi:chevron-up' : 'mdi:chevron-down'" class="text-[#0194DA]" />
            </button>
            <div v-show="openFaq === 0" class="px-6 pb-4">
              <p class="text-gray-600">
                O tempo de entrega varia conforme a complexidade do projeto. Projetos simples podem ser entregues 
                em 2-4 semanas, enquanto projetos mais complexos podem levar 2-6 meses. Sempre definimos um cronograma 
                detalhado durante a fase de planejamento.
              </p>
            </div>
          </div>

          <div class="card-promaster overflow-hidden">
            <button
              @click="toggleFaq(1)"
              class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span class="font-semibold text-gray-900">Vocês oferecem suporte pós-entrega?</span>
              <Icon :name="openFaq === 1 ? 'mdi:chevron-up' : 'mdi:chevron-down'" class="text-[#0194DA]" />
            </button>
            <div v-show="openFaq === 1" class="px-6 pb-4">
              <p class="text-gray-600">
                Sim! Oferecemos diferentes planos de suporte pós-entrega, incluindo manutenção, atualizações, 
                monitoramento e suporte técnico. O suporte pode ser contratado por período determinado ou sob demanda.
              </p>
            </div>
          </div>

          <div class="card-promaster overflow-hidden">
            <button
              @click="toggleFaq(2)"
              class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span class="font-semibold text-gray-900">Como é feito o orçamento dos projetos?</span>
              <Icon :name="openFaq === 2 ? 'mdi:chevron-up' : 'mdi:chevron-down'" class="text-[#0194DA]" />
            </button>
            <div v-show="openFaq === 2" class="px-6 pb-4">
              <p class="text-gray-600">
                Fazemos uma análise detalhada dos requisitos do seu projeto para elaborar um orçamento personalizado. 
                Consideramos escopo, complexidade, tecnologias envolvidas e prazo desejado. O orçamento é sempre 
                transparente e sem custos ocultos.
              </p>
            </div>
          </div>

          <div class="card-promaster overflow-hidden">
            <button
              @click="toggleFaq(3)"
              class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span class="font-semibold text-gray-900">Trabalham com quais tecnologias?</span>
              <Icon :name="openFaq === 3 ? 'mdi:chevron-up' : 'mdi:chevron-down'" class="text-[#0194DA]" />
            </button>
            <div v-show="openFaq === 3" class="px-6 pb-4">
              <p class="text-gray-600">
                Trabalhamos com uma ampla gama de tecnologias modernas incluindo Vue.js, React, Node.js, Python, 
                Docker, AWS, entre outras. Nossa equipe está sempre atualizada com as últimas tendências e melhores 
                práticas do mercado.
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
            Vamos começar juntos?
          </h2>
          <p class="text-xl text-white/90 mb-8">
            Entre em contato conosco e transforme suas ideias em realidade
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+5511999999999" class="bg-white text-[#0194DA] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover-lift inline-flex items-center justify-center">
              <Icon name="mdi:phone" class="mr-2" />
              Ligar Agora
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
  title: 'Contato - Promaster | Entre em contato conosco',
  meta: [
    { name: 'description', content: 'Entre em contato com a Promaster. Tire suas dúvidas, solicite orçamentos e descubra como podemos ajudar seu negócio com nossas soluções inovadoras.' },
    { name: 'keywords', content: 'contato promaster, orçamento, consultoria, suporte, telefone, email, endereço' },
    { property: 'og:title', content: 'Contato - Promaster | Entre em contato conosco' },
    { property: 'og:description', content: 'Fale conosco e descubra como a Promaster pode transformar seu negócio.' }
  ]
})
</script>

<style scoped>
.animation-delay-200 {
  animation-delay: 0.2s;
}
</style> 