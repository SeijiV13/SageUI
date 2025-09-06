import DefaultTheme from 'vitepress/theme'
import './sageui.css'
import './custom.css'

// Enhanced animations and interactions
function initializeAnimations() {
  // Intersection Observer for scroll-triggered animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, observerOptions)

  // Observe elements for scroll animations
  const animateElements = document.querySelectorAll(
    '.demo-container, .card, .alert, .vp-doc h2, .vp-doc h3, div[class*="language-"]'
  )
  animateElements.forEach(el => observer.observe(el))

  // Add ripple effect to buttons
  function addRippleEffect(element) {
    element.addEventListener('click', function(e) {
      const ripple = document.createElement('span')
      const rect = this.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        z-index: 1000;
      `
      
      this.appendChild(ripple)
      setTimeout(() => ripple.remove(), 600)
    })
  }

  // Apply ripple effect to buttons
  document.querySelectorAll('.btn, .VPHero .action').forEach(addRippleEffect)

  // Enhanced code block interactions
  document.querySelectorAll('div[class*="language-"]').forEach(block => {
    const header = document.createElement('div')
    header.className = 'code-header'
    header.innerHTML = `
      <div class="code-dots">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
      </div>
    `
    block.insertBefore(header, block.firstChild)
    
    // Add copy success feedback
    const copyBtn = block.querySelector('.copy')
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const feedback = document.createElement('div')
        feedback.className = 'copy-feedback'
        feedback.textContent = 'Copied!'
        copyBtn.appendChild(feedback)
        setTimeout(() => feedback.remove(), 2000)
      })
    }
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
        // Add highlight animation to target
        target.style.animation = 'highlight 2s ease-out'
        setTimeout(() => target.style.animation = '', 2000)
      }
    })
  })

  // Enhanced table interactions
  document.querySelectorAll('.vp-doc table').forEach(table => {
    const rows = table.querySelectorAll('tbody tr')
    rows.forEach((row, index) => {
      row.style.animationDelay = `${index * 0.1}s`
      row.addEventListener('mouseenter', () => {
        rows.forEach(r => r.style.opacity = r === row ? '1' : '0.7')
      })
      row.addEventListener('mouseleave', () => {
        rows.forEach(r => r.style.opacity = '1')
      })
    })
  })

  // Page transition effects
  let isTransitioning = false
  router.beforeEach(() => {
    if (!isTransitioning) {
      isTransitioning = true
      document.body.style.opacity = '0.8'
      document.body.style.transform = 'translateY(20px)'
    }
  })
  
  router.afterEach(() => {
    setTimeout(() => {
      document.body.style.opacity = '1'
      document.body.style.transform = 'translateY(0)'
      isTransitioning = false
      // Re-initialize animations for new page
      setTimeout(initializeAnimations, 100)
    }, 150)
  })

  // Parallax effect for hero section
  const hero = document.querySelector('.VPHero')
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset
      const parallax = scrolled * 0.5
      hero.style.transform = `translateY(${parallax}px)`
    })
  }

  // Dynamic theme color based on scroll position
  let ticking = false
  function updateThemeColor() {
    const scrollPercent = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)
    const hue = 142 + (scrollPercent * 20) // Green hue range
    document.documentElement.style.setProperty('--vp-c-brand-1', `hsl(${hue}, 69%, 58%)`)
    document.documentElement.style.setProperty('--vp-c-brand-2', `hsl(${hue}, 64%, 49%)`)
    document.documentElement.style.setProperty('--vp-c-brand-3', `hsl(${hue}, 69%, 42%)`)
    ticking = false
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateThemeColor)
      ticking = true
    }
  })
}

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // Initialize animations when app is ready
    if (typeof window !== 'undefined') {
      router.onAfterRouteChanged = () => {
        setTimeout(initializeAnimations, 100)
      }
      
      // Initialize on first load
      setTimeout(initializeAnimations, 500)
    }
  }
}
