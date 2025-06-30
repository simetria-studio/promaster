<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-32 bg-gradient-to-br from-gray-50 to-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up font-poppins">
            Nossa <span class="text-[#0194DA]">Empresa</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 animate-fade-in-up animation-delay-200">
            Conheça a história, valores e missão da Promaster
          </p>
        </div>
      </div>
    </section>

    <!-- Sobre Nós -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="animate-slide-in-left">
            <h2 class="text-4xl font-bold text-gray-900 mb-6 font-poppins">
              Quem Somos
            </h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              A Promaster é uma empresa líder em soluções inovadoras, fundada com o propósito de 
              oferecer agilidade e variedade em todos os nossos serviços. Nossa trajetória é 
              marcada pelo compromisso com a excelência e a satisfação dos nossos clientes.
            </p>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              Com mais de 15 anos de experiência no mercado, desenvolvemos uma expertise única 
              que nos permite entregar soluções personalizadas e de alta qualidade para empresas 
              de diversos segmentos.
            </p>
            <div class="flex flex-wrap gap-4">
              <div class="flex items-center space-x-2">
                <Icon name="mdi:check-circle" class="text-[#0194DA] text-xl" />
                <span class="text-gray-700 font-medium">Fundada em 2008</span>
              </div>
              <div class="flex items-center space-x-2">
                <Icon name="mdi:check-circle" class="text-[#0194DA] text-xl" />
                <span class="text-gray-700 font-medium">+500 Projetos</span>
              </div>
              <div class="flex items-center space-x-2">
                <Icon name="mdi:check-circle" class="text-[#0194DA] text-xl" />
                <span class="text-gray-700 font-medium">Equipe Especializada</span>
              </div>
            </div>
          </div>
          <div class="animate-slide-in-right">
            <div class="relative">
              <div class="bg-[#0194DA]/10 rounded-3xl p-8">
                <Icon name="mdi:office-building" class="text-8xl text-[#0194DA] mx-auto block mb-4" />
                <div class="text-center">
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">Nossa Sede</h3>
                  <p class="text-gray-600">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Missão, Visão e Valores -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Nossos <span class="text-[#0194DA]">Pilares</span>
          </h2>
          <p class="text-xl text-gray-600">
            Os valores que nos guiam em cada projeto
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Missão -->
          <div class="card-promaster p-8 text-center hover-lift">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-[#0194DA]/10 rounded-full mb-6">
              <Icon name="mdi:target" class="text-3xl text-[#0194DA]" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Missão</h3>
            <p class="text-gray-600 leading-relaxed">
              Fornecer soluções inovadoras e personalizadas que agreguem valor aos nossos 
              clientes, sempre com agilidade, qualidade e excelência no atendimento.
            </p>
          </div>

          <!-- Visão -->
          <div class="card-promaster p-8 text-center hover-lift">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-[#0194DA]/10 rounded-full mb-6">
              <Icon name="mdi:eye" class="text-3xl text-[#0194DA]" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Visão</h3>
            <p class="text-gray-600 leading-relaxed">
              Ser reconhecida como referência em soluções inovadoras, sendo a primeira escolha 
              dos clientes que buscam agilidade e variedade em seus projetos.
            </p>
          </div>

          <!-- Valores -->
          <div class="card-promaster p-8 text-center hover-lift">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-[#0194DA]/10 rounded-full mb-6">
              <Icon name="mdi:heart" class="text-3xl text-[#0194DA]" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
            <p class="text-gray-600 leading-relaxed">
              Integridade, inovação, excelência, respeito ao cliente, trabalho em equipe 
              e compromisso com resultados excepcionais.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Diferencias -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
              Nossos <span class="text-[#0194DA]">Diferenciais</span>
            </h2>
            <p class="text-xl text-gray-600">
              O que nos torna únicos no mercado
            </p>
          </div>

          <div class="space-y-8">
            <!-- Diferencial 1 -->
            <div class="flex flex-col md:flex-row items-center gap-8">
              <div class="flex-shrink-0">
                <div class="w-20 h-20 bg-[#0194DA]/10 rounded-full flex items-center justify-center">
                  <Icon name="mdi:clock-fast" class="text-4xl text-[#0194DA]" />
                </div>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3">Agilidade Comprovada</h3>
                <p class="text-gray-600 leading-relaxed">
                  Processos otimizados e metodologias ágeis garantem entregas rápidas sem 
                  comprometer a qualidade. Nossa equipe está preparada para responder 
                  rapidamente às demandas do mercado.
                </p>
              </div>
            </div>

            <!-- Diferencial 2 -->
            <div class="flex flex-col md:flex-row-reverse items-center gap-8">
              <div class="flex-shrink-0">
                <div class="w-20 h-20 bg-[#0194DA]/10 rounded-full flex items-center justify-center">
                  <Icon name="mdi:puzzle" class="text-4xl text-[#0194DA]" />
                </div>
              </div>
              <div class="text-right md:text-left">
                <h3 class="text-2xl font-bold text-gray-900 mb-3">Soluções Personalizadas</h3>
                <p class="text-gray-600 leading-relaxed">
                  Cada cliente é único, e por isso desenvolvemos soluções sob medida que 
                  atendem perfeitamente às suas necessidades específicas e objetivos de negócio.
                </p>
              </div>
            </div>

            <!-- Diferencial 3 -->
            <div class="flex flex-col md:flex-row items-center gap-8">
              <div class="flex-shrink-0">
                <div class="w-20 h-20 bg-[#0194DA]/10 rounded-full flex items-center justify-center">
                  <Icon name="mdi:certificate" class="text-4xl text-[#0194DA]" />
                </div>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3">Qualidade Garantida</h3>
                <p class="text-gray-600 leading-relaxed">
                  Rigoroso controle de qualidade em todas as etapas do projeto, com testes 
                  abrangentes e validações contínuas para garantir a excelência do resultado final.
                </p>
              </div>
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
            Faça parte da nossa história
          </h2>
          <p class="text-xl text-white/90 mb-8">
            Vamos construir juntos o futuro do seu negócio
          </p>
          <NuxtLink to="/contato" class="bg-white text-[#0194DA] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover-lift inline-block">
            Entre em Contato
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO Meta Tags
useHead({
  title: 'Empresa - Promaster | Conheça nossa história e valores',
  meta: [
    { name: 'description', content: 'Conheça a Promaster: nossa história, missão, visão, valores e diferenciais. Mais de 15 anos oferecendo soluções inovadoras com agilidade e variedade.' },
    { name: 'keywords', content: 'promaster empresa, história, missão, visão, valores, diferenciais, agilidade, qualidade' },
    { property: 'og:title', content: 'Empresa - Promaster | Conheça nossa história e valores' },
    { property: 'og:description', content: 'Conheça a Promaster: nossa história, missão, visão, valores e diferenciais.' }
  ]
})
</script>

<style scoped>
.animation-delay-200 {
  animation-delay: 0.2s;
}
</style> 