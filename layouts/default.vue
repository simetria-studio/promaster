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
              <span>Entregas de imediato a 2 dias</span>
            </div>
          </div>
          <div class="flex items-center space-x-4">
                         <div class="flex items-center space-x-2">
               <Icon name="mdi:phone" class="text-cyan-300" />
               <a href="https://api.whatsapp.com/send?phone=554130110777&text=Olá,%20vim%20pelo%20site%20da%20Promaster.%20Gostaria%20de%20mais%20informações%20sobre%20seus%20produtos." target="_blank" class="hover:text-cyan-200 transition-colors cursor-pointer">(41) 3011-0777</a>
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
                class="relative h-16 w-auto rounded-lg"
              />
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
            
            <button @click="scrollToProdutos" class="nav-item group relative px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm">
              <div class="flex items-center space-x-2">
                <Icon name="mdi:palette" class="text-cyan-300 transition-colors" />
                <span class="text-white font-medium">PRODUTOS</span>
              </div>
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            
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
            <button 
              @click="scrollToProdutos(); mobileMenuOpen = false"
              class="flex items-center space-x-3 text-white hover:text-cyan-300 transition-colors font-medium py-3 px-4 rounded-lg hover:bg-white/10 w-full text-left"
            >
              <Icon name="mdi:palette" class="text-cyan-300" />
              <span>PRODUTOS</span>
            </button>
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
              <button @click="scrollToProdutos" class="block text-gray-400 hover:text-[#0194DA] transition-colors text-left">
                Produtos
              </button>
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
                             <div class="space-y-2">
                 <div class="flex items-center space-x-2">
                   <Icon name="mdi:phone" class="text-[#0194DA]" />
                   <a href="https://api.whatsapp.com/send?phone=554130110777&text=Olá,%20vim%20pelo%20site%20da%20Promaster.%20Gostaria%20de%20mais%20informações%20sobre%20seus%20produtos." target="_blank" class="text-gray-400 hover:text-[#0194DA] transition-colors cursor-pointer">Curitiba: (41) 3011-0777</a>
                 </div>
                 <div class="flex items-center space-x-2">
                   <Icon name="mdi:phone" class="text-[#0194DA]" />
                   <a href="https://api.whatsapp.com/send?phone=554432534723&text=Olá,%20vim%20pelo%20site%20da%20Promaster.%20Gostaria%20de%20mais%20informações%20sobre%20seus%20produtos." target="_blank" class="text-gray-400 hover:text-[#0194DA] transition-colors cursor-pointer">Maringá: (44) 3253-4723</a>
                 </div>
                 <div class="flex items-center space-x-2">
                   <Icon name="mdi:phone" class="text-[#0194DA]" />
                   <a href="https://api.whatsapp.com/send?phone=5545988289009&text=Olá,%20vim%20pelo%20site%20da%20Promaster.%20Gostaria%20de%20mais%20informações%20sobre%20seus%20produtos." target="_blank" class="text-gray-400 hover:text-[#0194DA] transition-colors cursor-pointer">Cascavel: (45) 98828-9009</a>
                 </div>
               </div>
              <div class="flex items-start space-x-2">
                <Icon name="mdi:map-marker" class="text-[#0194DA] mt-1" />
                <div class="text-gray-400 text-sm">
                  <div class="mb-1">Curitiba - PR</div>
                  <div class="mb-1">Maringá - PR</div>
                  <div>Cascavel - PR</div>
                </div>
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
      class="fixed bottom-6 right-6 w-12 h-12 bg-[#0194DA] text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 z-40 hover-lift flex items-center justify-center"
    >
      <Icon name="mdi:arrow-up" class="text-xl" />
    </button>

    <!-- Popup: novo endereço Cascavel -->
    <Teleport to="body">
      <Transition name="fade-modal">
        <div
          v-if="addressModalOpen"
          class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="address-modal-title"
        >
          <div
            class="absolute inset-0 bg-black/70 backdrop-blur-sm"
            @click="closeAddressModal"
          />
          <div class="relative z-10 w-full max-w-[min(92vw,440px)] max-h-[90vh] flex flex-col items-center">
            <span id="address-modal-title" class="sr-only">Promaster Cascavel — novo endereço</span>
            <button
              type="button"
              class="absolute -top-2 -right-2 sm:top-0 sm:right-0 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 shadow-lg ring-1 ring-black/10 transition hover:bg-gray-100"
              aria-label="Fechar"
              @click="closeAddressModal"
            >
              <Icon name="mdi:close" class="text-2xl" />
            </button>
            <!-- img estático: NuxtImg + format webp quebra em muitos hosts (IPX/otimização indisponível) -->
            <img
              :src="modal1Src"
              alt="Estamos em novo endereço — Promaster Cascavel"
              class="max-h-[85vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { joinURL } from 'ufo'

const ADDRESS_MODAL_STORAGE_KEY = 'promaster_modal_novo_endereco_v1'

const modal1Src = joinURL(useRuntimeConfig().app.baseURL, '/modal1.jpg')

const mobileMenuOpen = ref(false)
const showScrollTop = ref(false)
const addressModalOpen = ref(false)

const closeAddressModal = () => {
  addressModalOpen.value = false
  if (process.client) {
    try {
      sessionStorage.setItem(ADDRESS_MODAL_STORAGE_KEY, '1')
    } catch {
      /* ignore */
    }
    document.body.style.overflow = ''
  }
}

const onEscapeAddressModal = (e) => {
  if (e.key === 'Escape' && addressModalOpen.value) {
    closeAddressModal()
  }
}

// Função para scroll suave até seção de produtos
const scrollToProdutos = () => {
  // Se estiver na home
  if (process.client && window.location.pathname === '/') {
    const section = document.getElementById('produtos')
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  } else {
    // Se não estiver na home, navegar para home e depois scroll
    navigateTo('/#produtos')
  }
}

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

watch(addressModalOpen, (open) => {
  if (!process.client) return
  if (open) {
    document.addEventListener('keydown', onEscapeAddressModal)
    document.body.style.overflow = 'hidden'
  } else {
    document.removeEventListener('keydown', onEscapeAddressModal)
    document.body.style.overflow = ''
  }
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)

  if (process.client) {
    let dismissed = false
    try {
      dismissed = sessionStorage.getItem(ADDRESS_MODAL_STORAGE_KEY) === '1'
    } catch {
      dismissed = false
    }
    if (!dismissed) {
      addressModalOpen.value = true
    }
  }
  
  // Verificar se há hash na URL e fazer scroll
  if (window.location.hash === '#produtos') {
    setTimeout(() => {
      const section = document.getElementById('produtos')
      if (section) {
        section.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 100)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('keydown', onEscapeAddressModal)
  if (process.client) {
    document.body.style.overflow = ''
  }
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

<style scoped>
.fade-modal-enter-active,
.fade-modal-leave-active {
  transition: opacity 0.22s ease;
}
.fade-modal-enter-active .relative.z-10,
.fade-modal-leave-active .relative.z-10 {
  transition: transform 0.22s ease, opacity 0.22s ease;
}
.fade-modal-enter-from,
.fade-modal-leave-to {
  opacity: 0;
}
.fade-modal-enter-from .relative.z-10,
.fade-modal-leave-to .relative.z-10 {
  transform: scale(0.96);
  opacity: 0;
}
</style>
