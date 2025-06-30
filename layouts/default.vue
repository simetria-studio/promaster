<template>
  <div class="min-h-screen bg-white">
    <!-- Header / Navegação -->
    <header class="fixed top-0 left-0 right-0 bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-[#0194DA]/95 backdrop-blur-md border-b border-white/10 z-50 transition-all duration-300" :class="{ 'shadow-2xl': showScrollTop }">
      <!-- Barra Superior com Informações -->
      <div class="bg-[#0194DA]/90 backdrop-blur-sm py-2 px-4 text-sm text-white/90 hidden lg:block">
        <div class="container mx-auto flex justify-between items-center">
          <div class="flex items-center space-x-6">
            <div class="flex items-center space-x-2">
              <Icon name="mdi:factory" class="text-cyan-300" />
              <span>Especialistas em Termoplásticos desde 2018</span>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="mdi:truck-fast" class="text-cyan-300" />
              <span>Entrega expressa: 30min em Curitiba</span>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2">
              <Icon name="mdi:phone" class="text-cyan-300" />
              <span>(41) 9999-9999</span>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="mdi:email" class="text-cyan-300" />
              <span>contato@promaster.eco.br</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Navegação Principal -->
      <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo e Nome -->
          <div class="flex items-center space-x-4">
            <div class="relative group">
              <div class="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <NuxtImg 
                src="/logo.jpg" 
                alt="Promaster Logo" 
                class="relative h-12 w-auto rounded-lg"
              />
            </div>
            <div class="hidden sm:block">
              <div class="text-2xl font-black text-white font-poppins tracking-tight">
                PROMASTER
              </div>
              <div class="text-xs text-cyan-300 font-medium tracking-widest -mt-1">
                DISTRIBUIDORA
              </div>
            </div>
          </div>

          <!-- Menu Desktop -->
          <div class="hidden lg:flex items-center space-x-1">
            <NuxtLink to="/" class="nav-item group relative px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm">
              <div class="flex items-center space-x-2">
                <Icon name="mdi:home" class="text-cyan-300 transition-colors" />
                <span class="text-white font-medium">HOME</span>
              </div>
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
            </NuxtLink>
            
            <NuxtLink to="/empresa" class="nav-item group relative px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm">
              <div class="flex items-center space-x-2">
                <Icon name="mdi:office-building" class="text-cyan-300 transition-colors" />
                <span class="text-white font-medium">EMPRESA</span>
              </div>
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
            </NuxtLink>
            
            <NuxtLink to="/produtos" class="nav-item group relative px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm">
              <div class="flex items-center space-x-2">
                <Icon name="mdi:palette" class="text-cyan-300 transition-colors" />
                <span class="text-white font-medium">PRODUTOS</span>
              </div>
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
            </NuxtLink>
            
            <NuxtLink to="/contato" class="nav-item group relative px-6 py-3 ml-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
              <div class="flex items-center space-x-2">
                <Icon name="mdi:map-marker-radius" class="text-white" />
                <span class="text-white">CONTATO</span>
              </div>
            </NuxtLink>
          </div>

          <!-- Menu Mobile/Tablet -->
          <div class="flex items-center space-x-4 lg:hidden">
            <!-- Nome mobile -->
            <div class="sm:hidden">
              <div class="text-lg font-black text-white font-poppins">
                PROMASTER
              </div>
            </div>
            
            <!-- Botão Mobile Menu -->
            <button 
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="relative p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Icon :name="mobileMenuOpen ? 'mdi:close' : 'mdi:menu'" class="text-2xl text-white" />
            </button>
          </div>
        </div>

        <!-- Menu Mobile -->
        <div 
          v-show="mobileMenuOpen" 
          class="lg:hidden mt-6 pb-4 border-t border-white/20 pt-6 animate-fade-in-up"
        >
          <div class="grid grid-cols-1 gap-2">
            <NuxtLink 
              to="/" 
              @click="mobileMenuOpen = false"
              class="flex items-center space-x-3 text-white hover:text-cyan-300 transition-colors font-medium py-3 px-4 rounded-lg hover:bg-white/10"
            >
              <Icon name="mdi:home" class="text-cyan-300" />
              <span>HOME</span>
            </NuxtLink>
            <NuxtLink 
              to="/empresa" 
              @click="mobileMenuOpen = false"
              class="flex items-center space-x-3 text-white hover:text-cyan-300 transition-colors font-medium py-3 px-4 rounded-lg hover:bg-white/10"
            >
              <Icon name="mdi:office-building" class="text-cyan-300" />
              <span>EMPRESA</span>
            </NuxtLink>
            <NuxtLink 
              to="/produtos" 
              @click="mobileMenuOpen = false"
              class="flex items-center space-x-3 text-white hover:text-cyan-300 transition-colors font-medium py-3 px-4 rounded-lg hover:bg-white/10"
            >
              <Icon name="mdi:palette" class="text-cyan-300" />
              <span>PRODUTOS</span>
            </NuxtLink>
            <NuxtLink 
              to="/contato" 
              @click="mobileMenuOpen = false"
              class="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-4 rounded-xl mt-2 hover:scale-105 transition-transform"
            >
              <Icon name="mdi:map-marker-radius" />
              <span>CONTATO</span>
            </NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <!-- Conteúdo Principal -->
    <main class="pt-24 lg:pt-28">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Logo e Descrição -->
          <div class="space-y-4">
            <div class="flex items-center space-x-2">
              <NuxtImg 
                src="/logo.jpg" 
                alt="Promaster Logo" 
                class="h-8 w-auto"
              />
              <span class="text-2xl font-bold text-white font-poppins">PROMASTER</span>
            </div>
            <p class="text-gray-400 leading-relaxed">
              Agilidade e variedade à sua disposição! 
              Soluções inovadoras para suas necessidades.
            </p>
          </div>

          <!-- Links Rápidos -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-white">Links Rápidos</h3>
            <div class="space-y-2">
              <NuxtLink to="/" class="block text-gray-400 hover:text-[#0194DA] transition-colors">
                Home
              </NuxtLink>
              <NuxtLink to="/empresa" class="block text-gray-400 hover:text-[#0194DA] transition-colors">
                Empresa
              </NuxtLink>
              <NuxtLink to="/produtos" class="block text-gray-400 hover:text-[#0194DA] transition-colors">
                Produtos
              </NuxtLink>
              <NuxtLink to="/contato" class="block text-gray-400 hover:text-[#0194DA] transition-colors">
                Contato
              </NuxtLink>
            </div>
          </div>

          <!-- Informações de Contato -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-white">Contato</h3>
            <div class="space-y-3">
              <div class="flex items-center space-x-2">
                <Icon name="mdi:email" class="text-[#0194DA]" />
                <span class="text-gray-400">contato@promaster.eco.br</span>
              </div>
              <div class="flex items-center space-x-2">
                <Icon name="mdi:phone" class="text-[#0194DA]" />
                <span class="text-gray-400">(11) 9999-9999</span>
              </div>
              <div class="flex items-center space-x-2">
                <Icon name="mdi:map-marker" class="text-[#0194DA]" />
                <span class="text-gray-400">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-gray-800 mt-8 pt-8 text-center">
          <p class="text-gray-400">
            © {{ new Date().getFullYear() }} PROMASTER. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>

    <!-- Botão Voltar ao Topo -->
    <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 bg-[#0194DA] text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 z-40 hover-lift"
    >
      <Icon name="mdi:arrow-up" class="text-xl" />
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mobileMenuOpen = ref(false)
const showScrollTop = ref(false)

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Fechar menu mobile ao redimensionar tela
if (process.client) {
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      mobileMenuOpen.value = false
    }
  })
}
</script> 