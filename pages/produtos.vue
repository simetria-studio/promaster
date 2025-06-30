<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-32 bg-gradient-to-br from-[#0194DA]/5 to-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up font-poppins">
            Nossos <span class="text-[#0194DA]">Produtos</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 animate-fade-in-up animation-delay-200">
            Descubra nossas soluções inovadoras que combinam agilidade e variedade
          </p>
        </div>
      </div>
    </section>

    <!-- Categorias de Produtos -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Nossas <span class="text-[#0194DA]">Soluções</span>
          </h2>
          <p class="text-xl text-gray-600">
            Produtos desenvolvidos para atender suas necessidades específicas
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Produto 1 -->
          <div class="card-promaster overflow-hidden hover-lift group">
            <div class="relative h-48 bg-gradient-to-br from-[#0194DA]/10 to-[#0194DA]/5 flex items-center justify-center">
              <Icon name="mdi:web" class="text-6xl text-[#0194DA] group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Desenvolvimento Web</h3>
              <p class="text-gray-600 mb-4">
                Sites modernos, responsivos e otimizados para performance. Criamos experiências 
                digitais únicas que convertem visitantes em clientes.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-sm text-gray-600">
                  <Icon name="mdi:check" class="text-[#0194DA] mr-2" />
                  Design Responsivo
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <Icon name="mdi:check" class="text-[#0194DA] mr-2" />
                  SEO Otimizado
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <Icon name="mdi:check" class="text-[#0194DA] mr-2" />
                  Performance Superior
                </li>
              </ul>
              <button class="btn-promaster w-full">Saiba Mais</button>
            </div>
          </div>

          <!-- Produto 2 -->
          <div class="card-promaster overflow-hidden hover-lift group">
            <div class="relative h-48 bg-gradient-to-br from-[#0194DA]/10 to-[#0194DA]/5 flex items-center justify-center">
              <Icon name="mdi:application" class="text-6xl text-[#0194DA] group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Aplicações Mobile</h3>
              <p class="text-gray-600 mb-4">
                Apps nativos e híbridos para iOS e Android. Soluções móveis que conectam 
                sua empresa aos clientes onde quer que estejam.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-sm text-gray-600">
                  <Icon name="mdi:check" class="text-[#0194DA] mr-2" />
                  Cross-Platform
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <Icon name="mdi:check" class="text-[#0194DA] mr-2" />
                  UI/UX Otimizada
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <Icon name="mdi:check" class="text-[#0194DA] mr-2" />
                  Integração Completa
                </li>
              </ul>
              <button class="btn-promaster w-full">Saiba Mais</button>
            </div>
          </div>

          <!-- Produto 3 -->
          <div class="card-promaster overflow-hidden hover-lift group">
            <div class="relative h-48 bg-gradient-to-br from-[#0194DA]/10 to-[#0194DA]/5 flex items-center justify-center">
              <Icon name="mdi:cloud" class="text-6xl text-[#0194DA] group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Soluções em Nuvem</h3>
              <p class="text-gray-600 mb-4">
                Infraestrutura escalável e segura na nuvem. Modernize sua operação com 
                soluções que crescem junto com seu negócio.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-sm text-gray-600">
                  <Icon name="mdi:check" class="text-[#0194DA] mr-2" />
                  Alta Disponibilidade
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <Icon name="mdi:check" class="text-[#0194DA] mr-2" />
                  Backup Automático
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <Icon name="mdi:check" class="text-[#0194DA] mr-2" />
                  Segurança Avançada
                </li>
              </ul>
              <button class="btn-promaster w-full">Saiba Mais</button>
            </div>
          </div>

          <!-- Produto 4 -->
          <div class="card-promaster overflow-hidden hover-lift group">
            <div class="relative h-48 bg-gradient-to-br from-[#0194DA]/10 to-[#0194DA]/5 flex items-center justify-center">
              <Icon name="mdi:chart-line" class="text-6xl text-[#0194DA] group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Business Intelligence</h3>
              <p class="text-gray-600 mb-4">
                Transforme dados em insights estratégicos. Dashboards intuitivos e 
                relatórios inteligentes para tomada de decisões precisas.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-sm text-gray-600">
                  <Icon name="mdi:check" class="text-[#0194DA] mr-2" />
                  Dashboards Interativos
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <Icon name="mdi:check" class="text-[#0194DA] mr-2" />
                  Relatórios Automatizados
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <Icon name="mdi:check" class="text-[#0194DA] mr-2" />
                  Análise Preditiva
                </li>
              </ul>
              <button class="btn-promaster w-full">Saiba Mais</button>
            </div>
          </div>

          <!-- Produto 5 -->
          <div class="card-promaster overflow-hidden hover-lift group">
            <div class="relative h-48 bg-gradient-to-br from-[#0194DA]/10 to-[#0194DA]/5 flex items-center justify-center">
              <Icon name="mdi:security" class="text-6xl text-[#0194DA] group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Cibersegurança</h3>
              <p class="text-gray-600 mb-4">
                Proteja seus dados e sistemas com nossas soluções de segurança avançadas. 
                Monitoramento 24/7 e resposta rápida a ameaças.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-sm text-gray-600">
                  <Icon name="mdi:check" class="text-[#0194DA] mr-2" />
                  Monitoramento 24/7
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <Icon name="mdi:check" class="text-[#0194DA] mr-2" />
                  Detecção de Ameaças
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <Icon name="mdi:check" class="text-[#0194DA] mr-2" />
                  Compliance Total
                </li>
              </ul>
              <button class="btn-promaster w-full">Saiba Mais</button>
            </div>
          </div>

          <!-- Produto 6 -->
          <div class="card-promaster overflow-hidden hover-lift group">
            <div class="relative h-48 bg-gradient-to-br from-[#0194DA]/10 to-[#0194DA]/5 flex items-center justify-center">
              <Icon name="mdi:cog" class="text-6xl text-[#0194DA] group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Automação de Processos</h3>
              <p class="text-gray-600 mb-4">
                Otimize operações com automação inteligente. Reduza custos, elimine erros 
                e aumente a produtividade da sua equipe.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-sm text-gray-600">
                  <Icon name="mdi:check" class="text-[#0194DA] mr-2" />
                  RPA Avançado
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <Icon name="mdi:check" class="text-[#0194DA] mr-2" />
                  Workflows Inteligentes
                </li>
                <li class="flex items-center text-sm text-gray-600">
                  <Icon name="mdi:check" class="text-[#0194DA] mr-2" />
                  Integração Completa
                </li>
              </ul>
              <button class="btn-promaster w-full">Saiba Mais</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Processo de Desenvolvimento -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Nosso <span class="text-[#0194DA]">Processo</span>
          </h2>
          <p class="text-xl text-gray-600">
            Metodologia comprovada para entregar resultados excepcionais
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Etapa 1 -->
          <div class="text-center">
            <div class="relative">
              <div class="w-20 h-20 bg-[#0194DA] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <div class="hidden md:block absolute top-10 left-full w-full h-0.5 bg-[#0194DA]/20 -z-10"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Análise</h3>
            <p class="text-gray-600">
              Entendemos suas necessidades e objetivos para criar a solução ideal.
            </p>
          </div>

          <!-- Etapa 2 -->
          <div class="text-center">
            <div class="relative">
              <div class="w-20 h-20 bg-[#0194DA] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <div class="hidden md:block absolute top-10 left-full w-full h-0.5 bg-[#0194DA]/20 -z-10"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Planejamento</h3>
            <p class="text-gray-600">
              Definimos estratégias, cronogramas e recursos necessários.
            </p>
          </div>

          <!-- Etapa 3 -->
          <div class="text-center">
            <div class="relative">
              <div class="w-20 h-20 bg-[#0194DA] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <div class="hidden md:block absolute top-10 left-full w-full h-0.5 bg-[#0194DA]/20 -z-10"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Desenvolvimento</h3>
            <p class="text-gray-600">
              Implementamos a solução com as melhores práticas do mercado.
            </p>
          </div>

          <!-- Etapa 4 -->
          <div class="text-center">
            <div class="w-20 h-20 bg-[#0194DA] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              4
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Entrega</h3>
            <p class="text-gray-600">
              Testamos, ajustamos e entregamos com suporte contínuo.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tecnologias -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            <span class="text-[#0194DA]">Tecnologias</span> que Utilizamos
          </h2>
          <p class="text-xl text-gray-600">
            Sempre na vanguarda das melhores ferramentas e frameworks
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          <div class="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <Icon name="logos:vue" class="text-4xl mx-auto mb-2" />
            <p class="text-sm font-medium text-gray-700">Vue.js</p>
          </div>
          <div class="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <Icon name="logos:react" class="text-4xl mx-auto mb-2" />
            <p class="text-sm font-medium text-gray-700">React</p>
          </div>
          <div class="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <Icon name="logos:nodejs" class="text-4xl mx-auto mb-2" />
            <p class="text-sm font-medium text-gray-700">Node.js</p>
          </div>
          <div class="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <Icon name="logos:python" class="text-4xl mx-auto mb-2" />
            <p class="text-sm font-medium text-gray-700">Python</p>
          </div>
          <div class="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <Icon name="logos:docker" class="text-4xl mx-auto mb-2" />
            <p class="text-sm font-medium text-gray-700">Docker</p>
          </div>
          <div class="text-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <Icon name="logos:aws" class="text-4xl mx-auto mb-2" />
            <p class="text-sm font-medium text-gray-700">AWS</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 gradient-promaster">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
            Pronto para começar?
          </h2>
          <p class="text-xl text-white/90 mb-8">
            Vamos conversar sobre como nossas soluções podem transformar seu negócio
          </p>
          <NuxtLink to="/contato" class="bg-white text-[#0194DA] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover-lift inline-block">
            Solicite um Orçamento
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO Meta Tags
useHead({
  title: 'Produtos - Promaster | Soluções inovadoras para seu negócio',
  meta: [
    { name: 'description', content: 'Descubra os produtos e soluções da Promaster: desenvolvimento web, apps mobile, cloud, BI, segurança e automação. Tecnologia de ponta para seu negócio.' },
    { name: 'keywords', content: 'promaster produtos, desenvolvimento web, aplicativos mobile, cloud, business intelligence, segurança, automação' },
    { property: 'og:title', content: 'Produtos - Promaster | Soluções inovadoras para seu negócio' },
    { property: 'og:description', content: 'Soluções completas em tecnologia: web, mobile, cloud, BI e mais.' }
  ]
})
</script>

<style scoped>
.animation-delay-200 {
  animation-delay: 0.2s;
}
</style> 