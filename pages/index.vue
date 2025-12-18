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

                             <!-- Imagens Reais dos Produtos -->
               <div class="grid grid-cols-5 gap-4 mb-8">
                 <div class="relative group cursor-pointer" @click="openModal('/img/img1.jpg', 'Produto 1')">
                   <div class="absolute -inset-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                   <NuxtImg 
                     src="/img/img1.jpg" 
                     alt="Produto 1" 
                     class="relative w-full h-32 object-cover rounded-full border-2 border-white/30 group-hover:scale-105 transition-transform duration-300"
                   />
                 </div>
                 <div class="relative group cursor-pointer" @click="openModal('/img/img2.jpg', 'Produto 2')">
                   <div class="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                   <NuxtImg 
                     src="/img/img2.jpg" 
                     alt="Produto 2" 
                     class="relative w-full h-28 object-cover rounded-full border-2 border-white/30 group-hover:scale-105 transition-transform duration-300"
                   />
                 </div>
                 <div class="relative group cursor-pointer" @click="openModal('/img/img3.jpg', 'Produto 3')">
                   <div class="absolute -inset-1 bg-gradient-to-r from-[#0194DA] to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                   <NuxtImg 
                     src="/img/img3.jpg" 
                     alt="Produto 3" 
                     class="relative w-full h-36 object-cover rounded-full border-2 border-white/30 group-hover:scale-105 transition-transform duration-300"
                   />
                 </div>
                 <div class="relative group cursor-pointer" @click="openModal('/img/img4.jpg', 'Produto 4')">
                   <div class="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                   <NuxtImg 
                     src="/img/img4.jpg" 
                     alt="Produto 4" 
                     class="relative w-full h-24 object-cover rounded-full border-2 border-white/30 group-hover:scale-105 transition-transform duration-300"
                   />
                 </div>
                 <div class="relative group cursor-pointer" @click="openModal('/img/img5.jpg', 'Produto 5')">
                   <div class="absolute -inset-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                   <NuxtImg 
                     src="/img/img5.jpg" 
                     alt="Produto 5" 
                     class="relative w-full h-30 object-cover rounded-full border-2 border-white/30 group-hover:scale-105 transition-transform duration-300"
                   />
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


    </section>

         <!-- Seção 7 Anos de Sucesso -->
     <section class="py-24 bg-gradient-to-br from-[#0194DA] to-cyan-600 relative overflow-hidden">
       <!-- Elementos decorativos -->
       <div class="absolute inset-0">
         <div class="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
         <div class="absolute bottom-10 right-10 w-16 h-16 bg-white/15 rounded-full blur-lg animate-pulse" style="animation-delay: -1s;"></div>
         <div class="absolute top-1/2 left-1/4 w-12 h-12 bg-white/20 rounded-full blur-md animate-pulse" style="animation-delay: -2s;"></div>
       </div>
       
       <div class="container mx-auto px-4 text-center relative z-10">
         <div class="max-w-4xl mx-auto">
           <div class="inline-flex items-center bg-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
             <Icon name="mdi:calendar-star" class="mr-2" />
             Celebrando 7 Anos
           </div>
           
           <h2 class="text-5xl md:text-6xl font-bold text-white mb-8 font-poppins">
             <span class="text-gradient-white">7 Anos</span> de Dedicação
           </h2>
           
           <p class="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
             Desde 2018, a Promaster tem sido referência em distribuição de pigmentos e aditivos para termoplásticos no Paraná
           </p>
           
           <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
             <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
               <div class="text-4xl font-bold text-white mb-2">7</div>
               <div class="text-white/90 font-semibold">Anos de Experiência</div>
             </div>
             <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
               <div class="text-4xl font-bold text-white mb-2">500+</div>
               <div class="text-white/90 font-semibold">Clientes Atendidos</div>
             </div>
             <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
               <div class="text-4xl font-bold text-white mb-2">150t</div>
               <div class="text-white/90 font-semibold">Estoque Disponível</div>
             </div>
           </div>
           
           <div class="flex justify-center">
             <NuxtLink to="/empresa" class="bg-white text-[#0194DA] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover-lift inline-flex items-center justify-center">
               <Icon name="mdi:information" class="mr-2" />
               Conheça Nossa História Completa
             </NuxtLink>
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
                 e a Promaster continua crescendo a cada dia, completando 7 anos neste mercado.
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

    <!-- Seção Explore Nossos Produtos -->
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <div class="inline-flex items-center bg-[#0194DA]/10 text-[#0194DA] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="mdi:palette" class="mr-2" />
            Explore Nossos Produtos
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            <span class="text-gradient">Soluções</span> Completas
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Distribuição especializada de pigmentos, aditivos e resinas recicláveis para termoplásticos
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="card-promaster p-8 text-center hover-lift group">
            <div class="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Icon name="mdi:palette" class="text-3xl text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Pigmentos</h3>
            <p class="text-gray-600 mb-6">
              Ampla variedade de pigmentos para termoplásticos com laboratório próprio para identificação de cores.
            </p>
            <div class="text-[#0194DA] font-semibold">
              <Icon name="mdi:flask" class="inline mr-2" />
              Identificação de Cores
            </div>
          </div>
          
          <div class="card-promaster p-8 text-center hover-lift group">
            <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Icon name="mdi:test-tube" class="text-3xl text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Aditivos</h3>
            <p class="text-gray-600 mb-6">
              Aditivos especializados para termoplásticos, melhorando propriedades e qualidade final.
            </p>
            <div class="text-[#0194DA] font-semibold">
              <Icon name="mdi:star" class="inline mr-2" />
              Qualidade Garantida
            </div>
          </div>
          
          <div class="card-promaster p-8 text-center hover-lift group">
            <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Icon name="mdi:recycle" class="text-3xl text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Resinas Recicláveis</h3>
            <p class="text-gray-600 mb-6">
              Resinas recicláveis de alta qualidade, contribuindo para sustentabilidade ambiental.
            </p>
            <div class="text-[#0194DA] font-semibold">
              <Icon name="mdi:leaf" class="inline mr-2" />
              Sustentabilidade
            </div>
          </div>
        </div>

        <div class="text-center">
          <button @click="scrollToProdutos" class="bg-gradient-to-r from-[#0194DA] to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#0194DA]/25 inline-flex items-center">
            <Icon name="mdi:arrow-down" class="mr-2" />
            Ver Todos os Produtos
          </button>
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
                         <h3 class="text-2xl font-bold text-gray-900 mb-4">Cobertura Total Paraná</h3>
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
            <span class="text-gradient">Soluções</span> para termoplásticos
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

    <!-- Seção Instagram -->
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <div class="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon name="mdi:instagram" class="mr-2" />
            Siga-nos no Instagram
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            <span class="text-gradient">@distribuidorapromaster</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Acompanhe nosso dia a dia, novidades e projetos especiais
          </p>
        </div>

         <!-- Feed do Instagram -->
         <div class="mb-8">
           <div class="bg-white rounded-xl shadow-lg p-6">
             <div class="text-center mb-6">
               <h3 class="text-2xl font-bold text-gray-900 mb-2">Feed do Instagram</h3>
               <p class="text-gray-600">Posts reais do @distribuidorapromaster</p>
             </div>
             
                           <!-- Instagram Embed Simples -->
              <div class="flex justify-center">
                <iframe 
                  src="https://www.instagram.com/distribuidorapromaster/embed" 
                  width="600" 
                  height="600" 
                  frameborder="0" 
                  scrolling="no" 
                  allowtransparency="true"
                  class="rounded-lg shadow-lg"
                ></iframe>
              </div>
             
             <!-- Alternativa: Link direto para o perfil -->
             <div class="text-center mt-6">
               <p class="text-gray-600 mb-4">Para ver posts reais, acesse nosso perfil:</p>
               <a 
                 href="https://www.instagram.com/distribuidorapromaster" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
               >
                 <Icon name="mdi:instagram" class="mr-2" />
                 Ver Perfil Completo
               </a>
             </div>
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

     <!-- Modal para Visualização das Imagens -->
     <div v-if="modalOpen" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" @click="closeModal">
       <div class="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden" @click.stop>
         <!-- Botão Fechar -->
         <button @click="closeModal" class="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors">
           <Icon name="mdi:close" class="text-xl" />
         </button>
         
         <!-- Imagem -->
         <div class="relative">
           <NuxtImg 
             :src="modalImage" 
             :alt="modalTitle"
             class="w-full h-auto max-h-[90vh] object-contain"
           />
         </div>
       </div>
     </div>

     <!-- Modal de Aviso de Férias -->
     <div v-if="vacationModalOpen" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" @click="closeVacationModal">
       <div class="relative max-w-lg w-full bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in" @click.stop>
         <!-- Botão Fechar -->
         <button @click="closeVacationModal" class="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
           <Icon name="mdi:close" class="text-xl" />
         </button>
         
         <!-- Conteúdo do Modal -->
         <div class="p-8">
           <!-- Ícone de Aviso -->
           <div class="flex justify-center mb-6">
             <div class="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
               <Icon name="mdi:calendar-alert" class="text-4xl text-white" />
             </div>
           </div>
           
           <!-- Título -->
           <h2 class="text-3xl font-bold text-gray-900 text-center mb-6">
             Aviso de Férias
           </h2>
           
           <!-- Mensagem -->
           <div class="space-y-4 text-center">
             <p class="text-lg text-gray-700 leading-relaxed">
               Estaremos em <span class="font-semibold text-[#0194DA]">férias coletivas</span> de 
               <span class="font-semibold">22/12/2025</span> à <span class="font-semibold">05/01/2026</span>
             </p>
             <p class="text-lg text-gray-700 leading-relaxed">
               Durante esse período, nosso atendimento estará em recesso.
             </p>
             <p class="text-xl font-semibold text-[#0194DA] mt-6">
               Retornaremos no dia <span class="text-gray-900">06/01/2026</span>
             </p>
           </div>
           
           <!-- Botão de Fechar -->
           <div class="mt-8 flex justify-center">
             <button @click="closeVacationModal" class="bg-gradient-to-r from-[#0194DA] to-cyan-500 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
               Entendi
             </button>
           </div>
         </div>
       </div>
     </div>
   </div>
 </template>

<script setup>
import { ref, onMounted } from 'vue'

// Variáveis do modal
const modalOpen = ref(false)
const modalImage = ref('')
const modalTitle = ref('')

// Variáveis do modal de férias
const vacationModalOpen = ref(false)

// Função para abrir o modal
const openModal = (imageSrc, title) => {
  modalImage.value = imageSrc
  modalTitle.value = title
  modalOpen.value = true
  // Bloquear scroll do body
  document.body.style.overflow = 'hidden'
}

// Função para fechar o modal
const closeModal = () => {
  modalOpen.value = false
  // Restaurar scroll do body
  document.body.style.overflow = 'auto'
}

// Função para fechar o modal de férias
const closeVacationModal = () => {
  vacationModalOpen.value = false
  // Salvar no localStorage que o usuário já viu o aviso
  if (typeof window !== 'undefined') {
    localStorage.setItem('vacationNoticeDismissed', 'true')
  }
  // Restaurar scroll do body
  document.body.style.overflow = 'auto'
}

// Verificar e mostrar o modal de férias ao montar o componente
onMounted(() => {
  if (typeof window !== 'undefined') {
    const dismissed = localStorage.getItem('vacationNoticeDismissed')
    if (!dismissed) {
      vacationModalOpen.value = true
      document.body.style.overflow = 'hidden'
    }
  }
})

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

@keyframes fade-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
</style> 