<template>
  <div>
    <!-- Seção Hero -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-[#0194DA]">
      <!-- Background Pattern Industrial -->
      <div class="absolute inset-0 opacity-10 industrial-pattern"></div>

      <!-- Elementos de Pigmentos Flutuantes -->
      <div class="absolute inset-0">
        <!-- Círculos coloridos representando pigmentos -->
        <div class="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/20 rounded-full blur-2xl animate-floating" style="animation-delay: 0s;"></div>
        <div class="absolute top-1/3 right-1/4 w-24 h-24 bg-yellow-500/20 rounded-full blur-xl animate-floating" style="animation-delay: -1s;"></div>
        <div class="absolute bottom-1/3 left-1/3 w-28 h-28 bg-green-500/20 rounded-full blur-2xl animate-floating" style="animation-delay: -2s;"></div>
        <div class="absolute bottom-1/4 right-1/3 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-floating" style="animation-delay: -0.5s;"></div>
        <div class="absolute top-1/2 left-1/6 w-16 h-16 bg-purple-500/20 rounded-full blur-lg animate-floating" style="animation-delay: -1.5s;"></div>
        <div class="absolute bottom-1/2 right-1/6 w-36 h-36 bg-orange-500/15 rounded-full blur-3xl animate-floating" style="animation-delay: -2.5s;"></div>
      </div>

      <!-- Formas Geométricas Industriais -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-20 left-20 w-3 h-32 bg-white/30 rotate-45 animate-pulse"></div>
        <div class="absolute top-40 right-32 w-3 h-24 bg-white/20 rotate-12 animate-pulse" style="animation-delay: -1s;"></div>
        <div class="absolute bottom-32 left-32 w-2 h-28 bg-white/25 -rotate-30 animate-pulse" style="animation-delay: -2s;"></div>
        <div class="absolute bottom-20 right-20 w-4 h-20 bg-white/30 rotate-75 animate-pulse" style="animation-delay: -0.5s;"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Lado Esquerdo - Conteúdo -->
          <div class="text-left animate-slide-in-left">
            <!-- Badge Industrial -->
            <div class="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/20">
              <Icon name="mdi:factory" class="mr-2 text-[#0194DA]" />
              <span>Especialistas em Termoplásticos desde 2018</span>
            </div>

            <!-- Logo/Nome Grande -->
            <div class="mb-6">
              <h1 class="text-6xl md:text-7xl font-black text-white mb-2 font-poppins tracking-tight">
                PROMASTER
              </h1>
              <div class="flex items-center space-x-4">
                <div class="h-1 w-24 bg-gradient-to-r from-[#0194DA] to-cyan-400"></div>
                <span class="text-2xl md:text-3xl text-gray-300 font-light tracking-widest">DISTRIBUIDORA</span>
              </div>
            </div>

            <!-- Slogan Impactante -->
            <div class="mb-8">
              <p class="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0194DA] via-cyan-400 to-blue-400 mb-4">
                Agilidade e variedade
              </p>
              <p class="text-3xl md:text-4xl font-bold text-white">
                à sua disposição!
              </p>
            </div>

            <!-- Descrição Especializada -->
            <p class="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
              Distribuição especializada de <span class="text-cyan-400 font-semibold">pigmentos, aditivos</span> e 
              <span class="text-cyan-400 font-semibold">resinas recicláveis</span> para termoplásticos. 
              Atendimento completo ao Paraná com laboratório próprio e estoque de 150 toneladas.
            </p>

            <!-- CTAs Diferenciados -->
            <div class="flex flex-col sm:flex-row gap-4">
              <button @click="scrollToProdutos" class="group relative bg-gradient-to-r from-[#0194DA] to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#0194DA]/25 overflow-hidden">
                <div class="relative z-10 flex items-center justify-center">
                  <Icon name="mdi:palette" class="mr-2" />
                  Catálogo de Produtos
                </div>
                <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-[#0194DA] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <NuxtLink to="/contato" class="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-white hover:text-gray-900 backdrop-blur-sm bg-white/5">
                <div class="flex items-center justify-center">
                  <Icon name="mdi:map-marker-radius" class="mr-2" />
                  Nossa Localização
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- Lado Direito - Visual Técnico -->
          <div class="relative animate-slide-in-right">
            <!-- Container de Laboratório Visual -->
            <div class="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <!-- Título do Laboratório -->
              <div class="text-center mb-8">
                <h3 class="text-2xl font-bold text-white mb-2">Laboratório de Identificação</h3>
                <p class="text-gray-300">Controle de qualidade e precisão</p>
              </div>

              <!-- Simulação de Tubos de Ensaio -->
              <div class="grid grid-cols-5 gap-4 mb-8">
                <div class="relative">
                  <div class="w-full h-32 bg-gradient-to-t from-red-500/80 to-red-300/60 rounded-full border-2 border-white/30 animate-pulse"></div>
                  <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-white/50 rounded-t"></div>
                </div>
                <div class="relative">
                  <div class="w-full h-28 bg-gradient-to-t from-yellow-500/80 to-yellow-300/60 rounded-full border-2 border-white/30 animate-pulse" style="animation-delay: -0.5s;"></div>
                  <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-white/50 rounded-t"></div>
                </div>
                <div class="relative">
                  <div class="w-full h-36 bg-gradient-to-t from-[#0194DA]/80 to-cyan-400/60 rounded-full border-2 border-white/30 animate-pulse" style="animation-delay: -1s;"></div>
                  <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-white/50 rounded-t"></div>
                </div>
                <div class="relative">
                  <div class="w-full h-24 bg-gradient-to-t from-green-500/80 to-green-300/60 rounded-full border-2 border-white/30 animate-pulse" style="animation-delay: -1.5s;"></div>
                  <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-white/50 rounded-t"></div>
                </div>
                <div class="relative">
                  <div class="w-full h-30 bg-gradient-to-t from-purple-500/80 to-purple-300/60 rounded-full border-2 border-white/30 animate-pulse" style="animation-delay: -2s;"></div>
                  <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-white/50 rounded-t"></div>
                </div>
              </div>

              <!-- Métricas em Cards -->
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div class="text-3xl font-bold text-cyan-400 mb-1">150t</div>
                  <div class="text-sm text-gray-300">Estoque Disponível</div>
                </div>
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div class="text-3xl font-bold text-cyan-400 mb-1">500m²</div>
                  <div class="text-sm text-gray-300">Área Total</div>
                </div>
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div class="text-3xl font-bold text-cyan-400 mb-1">30min</div>
                  <div class="text-sm text-gray-300">Entrega Curitiba</div>
                </div>
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div class="text-3xl font-bold text-cyan-400 mb-1">TODO PR</div>
                  <div class="text-sm text-gray-300">Cobertura</div>
                </div>
              </div>
            </div>

            <!-- Elementos Decorativos Técnicos -->
            <div class="absolute -top-4 -right-4 w-8 h-8 border-2 border-cyan-400 rounded rotate-45 animate-spin" style="animation-duration: 8s;"></div>
            <div class="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-white/50 rounded-full animate-ping"></div>
            <div class="absolute top-1/2 -left-6 w-4 h-4 bg-gradient-to-r from-[#0194DA] to-cyan-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator Diferenciado -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div class="flex flex-col items-center text-white/70 group cursor-pointer">
          <span class="text-sm font-medium mb-2 group-hover:text-cyan-400 transition-colors">Explore nossos produtos</span>
          <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div class="w-1 h-3 bg-gradient-to-b from-[#0194DA] to-cyan-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção Nossa História -->
    <section class="py-24 gradient-bg-blue section-bg-pattern">
      <div class="container mx-auto px-4">
        <div class="text-center mb-20">
          <div class="inline-flex items-center bg-[#0194DA]/10 text-[#0194DA] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="mdi:history" class="mr-2" />
            Nossa História
          </div>
          <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
            Uma <span class="text-gradient">Trajetória</span> de Sucesso
          </h2>
          <p class="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
            Empresa familiar dedicada ao crescimento do mercado termoplástico no Paraná
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="animate-slide-in-left">
            <div class="card-feature p-8">
              <h3 class="text-3xl font-bold text-gray-900 mb-6">Nossos Primeiros Passos</h3>
              <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                A empresa começou com a proposta de estabelecer uma distribuidora de pigmentos 
                em Curitiba, levando produtos do Brasil inteiro para o estado do Paraná.
              </p>
              <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                Iniciamos em um pequeno depósito, com poucas ferramentas para trabalho, mas com 
                <span class="text-[#0194DA] font-semibold">conhecimento na área termoplástica</span> 
                e com muita vontade de vencer!
              </p>
              <div class="flex items-center space-x-2 text-[#0194DA]">
                <Icon name="mdi:calendar" class="text-xl" />
                <span class="font-semibold">Fundada em 01 de Julho de 2018</span>
              </div>
            </div>
          </div>

          <div class="animate-slide-in-right">
            <div class="card-feature p-8">
              <h3 class="text-3xl font-bold text-gray-900 mb-6">Crescimento e Expansão</h3>
              <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                <span class="text-[#0194DA] font-semibold">Clientes viraram amigos, amigos viraram parceiros</span> 
                e a Promaster continua crescendo a cada dia, completando 6 anos neste mercado.
              </p>
              <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                Hoje, trabalhamos em dois barracões de mais de 500m², temos um 
                <span class="text-[#0194DA] font-semibold">laboratório para identificação de cor</span>, 
                com aproximadamente 150t de produtos à pronta entrega.
              </p>
              <div class="space-y-3">
                <div class="flex items-center space-x-2">
                  <Icon name="mdi:check-circle" class="text-[#0194DA] text-xl" />
                  <span class="text-gray-700">Localização estratégica em Curitiba</span>
                </div>
                <div class="flex items-center space-x-2">
                  <Icon name="mdi:check-circle" class="text-[#0194DA] text-xl" />
                  <span class="text-gray-700">Entrega em até 30 minutos em Curitiba</span>
                </div>
                <div class="flex items-center space-x-2">
                  <Icon name="mdi:check-circle" class="text-[#0194DA] text-xl" />
                  <span class="text-gray-700">Até 2 dias para Maringá e Cascavel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção Diferenciais -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-20">
          <div class="inline-flex items-center bg-[#0194DA]/10 text-[#0194DA] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="mdi:star" class="mr-2" />
            Nossos Diferenciais
          </div>
          <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
            Por que escolher a <span class="text-gradient">Promaster</span>?
          </h2>
          <p class="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Trabalhamos com excelência e qualidade, garantindo sempre a melhor experiência
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Diferencial 1 -->
          <div class="card-feature p-8 text-center hover-lift group">
            <div class="icon-container w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Icon name="mdi:family-tree" class="text-4xl text-[#0194DA] icon group-hover:scale-110 transition-transform" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Empresa Familiar</h3>
            <p class="text-gray-600 leading-relaxed">
              Valores familiares aplicados ao negócio, com atendimento personalizado e 
              relacionamento próximo com cada cliente.
            </p>
          </div>

          <!-- Diferencial 2 -->
          <div class="card-feature p-8 text-center hover-lift group">
            <div class="icon-container w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Icon name="mdi:flask" class="text-4xl text-[#0194DA] icon group-hover:scale-110 transition-transform" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Laboratório Próprio</h3>
            <p class="text-gray-600 leading-relaxed">
              Laboratório para identificação de cor, garantindo precisão e qualidade 
              em todos os nossos produtos.
            </p>
          </div>

          <!-- Diferencial 3 -->
          <div class="card-feature p-8 text-center hover-lift group">
            <div class="icon-container w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Icon name="mdi:truck-fast" class="text-4xl text-[#0194DA] icon group-hover:scale-110 transition-transform" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Entrega Rápida</h3>
            <p class="text-gray-600 leading-relaxed">
              Localização estratégica permite entregas em 30 minutos em Curitiba 
              e até 2 dias para as regiões de Maringá e Cascavel.
            </p>
          </div>

          <!-- Diferencial 4 -->
          <div class="card-feature p-8 text-center hover-lift group">
            <div class="icon-container w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Icon name="mdi:warehouse" class="text-4xl text-[#0194DA] icon group-hover:scale-110 transition-transform" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Grande Estoque</h3>
            <p class="text-gray-600 leading-relaxed">
              Mais de 500m² de área e aproximadamente 150t de produtos 
              à pronta entrega para atender sua demanda.
            </p>
          </div>

          <!-- Diferencial 5 -->
          <div class="card-feature p-8 text-center hover-lift group">
            <div class="icon-container w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Icon name="mdi:recycle" class="text-4xl text-[#0194DA] icon group-hover:scale-110 transition-transform" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Sustentabilidade</h3>
            <p class="text-gray-600 leading-relaxed">
              Trabalhamos com resinas recicláveis de alta qualidade, 
              contribuindo para um futuro mais sustentável.
            </p>
          </div>

          <!-- Diferencial 6 -->
          <div class="card-feature p-8 text-center hover-lift group">
            <div class="icon-container w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Icon name="mdi:map-marker-multiple" class="text-4xl text-[#0194DA] icon group-hover:scale-110 transition-transform" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Cobertura Total PR</h3>
            <p class="text-gray-600 leading-relaxed">
              Atendemos todo o estado do Paraná com produtos do Brasil inteiro, 
              levando variedade até você.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção Produtos/Serviços -->
    <section id="produtos" class="py-24 gradient-bg-gray">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <div class="inline-flex items-center bg-[#0194DA]/10 text-[#0194DA] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="mdi:palette" class="mr-2" />
            Nossos Produtos
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            <span class="text-gradient">Soluções</span> para Termoplásticos
          </h2>
          <p class="text-xl text-gray-600">
            Distribuição especializada para o mercado termoplástico
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card-promaster p-8 text-center hover-lift group">
            <Icon name="mdi:palette" class="text-6xl text-[#0194DA] mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Pigmentos</h3>
            <p class="text-gray-600">
              Ampla variedade de pigmentos para termoplásticos com 
              laboratório próprio para identificação de cores.
            </p>
          </div>
          
          <div class="card-promaster p-8 text-center hover-lift group">
            <Icon name="mdi:test-tube" class="text-6xl text-[#0194DA] mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Aditivos</h3>
            <p class="text-gray-600">
              Aditivos especializados para termoplásticos, 
              melhorando propriedades e qualidade final.
            </p>
          </div>
          
          <div class="card-promaster p-8 text-center hover-lift group">
            <Icon name="mdi:recycle" class="text-6xl text-[#0194DA] mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Resinas Recicláveis</h3>
            <p class="text-gray-600">
              Resinas recicláveis de alta qualidade, 
              contribuindo para sustentabilidade ambiental.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção CTA -->
    <section class="py-24 hero-pattern-blue relative overflow-hidden">
      <!-- Elementos decorativos -->
      <div class="absolute inset-0">
        <div class="absolute top-16 left-16 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-floating"></div>
        <div class="absolute bottom-16 right-16 w-24 h-24 bg-white/15 rounded-full blur-xl animate-floating" style="animation-delay: -1s;"></div>
      </div>

      <div class="container mx-auto px-4 text-center relative z-10">
        <div class="max-w-4xl mx-auto">
          <div class="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="mdi:handshake" class="mr-2" />
            Faça Parte da Nossa História
          </div>
          <h2 class="text-5xl md:text-6xl font-bold text-white mb-8 font-poppins">
            Resolva os problemas do seu cotidiano
          </h2>
          <p class="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Nossa meta é trabalhar com excelência e qualidade, garantindo sempre a melhor experiência
          </p>
          <div class="flex justify-center">
            <NuxtLink to="/contato" class="bg-white text-[#0194DA] px-10 py-5 rounded-xl font-semibold text-xl hover:bg-gray-100 transition-all duration-300 hover-lift inline-flex items-center justify-center">
              <Icon name="mdi:phone" class="mr-2" />
              Solicite um Orçamento
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção Localização -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <div class="inline-flex items-center bg-[#0194DA]/10 text-[#0194DA] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="mdi:map-marker" class="mr-2" />
            Onde Estamos
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            <span class="text-gradient">Localização</span> Estratégica
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card-feature p-8 text-center hover-lift">
            <Icon name="mdi:city" class="text-6xl text-[#0194DA] mx-auto mb-6" />
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Curitiba</h3>
            <p class="text-gray-600 mb-4">
              Localização estratégica para chegar em qualquer local de Curitiba
            </p>
            <div class="text-[#0194DA] font-semibold">
              <Icon name="mdi:clock" class="inline mr-2" />
              Entrega em até 30 minutos
            </div>
          </div>
          
          <div class="card-feature p-8 text-center hover-lift">
            <Icon name="mdi:map" class="text-6xl text-[#0194DA] mx-auto mb-6" />
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Maringá</h3>
            <p class="text-gray-600 mb-4">
              Atendimento completo para toda a região de Maringá
            </p>
            <div class="text-[#0194DA] font-semibold">
              <Icon name="mdi:clock" class="inline mr-2" />
              Entrega em até 2 dias
            </div>
          </div>

          <div class="card-feature p-8 text-center hover-lift">
            <Icon name="mdi:map-marker-radius" class="text-6xl text-[#0194DA] mx-auto mb-6" />
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Cascavel</h3>
            <p class="text-gray-600 mb-4">
              Atendimento completo para toda a região de Cascavel
            </p>
            <div class="text-[#0194DA] font-semibold">
              <Icon name="mdi:clock" class="inline mr-2" />
              Entrega em até 2 dias úteis
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Função para scroll suave até seção de produtos
const scrollToProdutos = () => {
  const section = document.getElementById('produtos')
  if (section) {
    section.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// SEO Meta Tags
useHead({
  title: 'Promaster Distribuidora - Pigmentos e Aditivos para Termoplásticos | Paraná',
  meta: [
    { name: 'description', content: 'Promaster Distribuidora: empresa familiar especializada em pigmentos, aditivos para termoplásticos e resinas recicláveis. Atendemos todo o Paraná com estoque pronta entrega em Curitiba, Maringá e Cascavel.' },
    { name: 'keywords', content: 'promaster, distribuidora, pigmentos, termoplásticos, aditivos, resinas recicláveis, curitiba, maringá, cascavel, paraná' },
    { property: 'og:title', content: 'Promaster Distribuidora - Pigmentos e Aditivos para Termoplásticos' },
    { property: 'og:description', content: 'Empresa familiar dedicada à distribuição de pigmentos e aditivos para termoplásticos no Paraná. Atendemos Curitiba, Maringá e Cascavel.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.promaster.eco.br/' }
  ]
})
</script>

<style scoped>
.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}
</style> 