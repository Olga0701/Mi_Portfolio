const btnDarkMode = document.querySelector('.dark-mode-btn')
//Проверка на уровне системных настроек
if (window.matchMedia && window.matchMedia('(preferes-color-scheme: dark)').matches) {
  btnDarkMode.classList.add("dark-mode-btn--active")
  document.body.classList.add("dark")
}
//Проверка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
  btnDarkMode.classList.add("dark-mode-btn--active")
  document.body.classList.add("dark")
} else if (localStorage.getItem('dark-mode-btn--active') === 'light') {
  btnDarkMode.classList.remove("dark-mode-btn--active")
  document.body.classList.remove("dark")
}


window.matchMedia('(preferes-color-scheme: dark)')
.addEventListener('change', (event) => {
  const newColorScheme = event.matches ? 'dark' : 'light'

  if (newColorScheme === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active")
    document.body.classList.add("dark")
    localStorage.setItem('darkMode', 'dark')
  } else {
    btnDarkMode.classList.remove("dark-mode-btn--active")
    document.body.classList.remove("dark")
    localStorage.setItem('darkMode', 'light')
  }
})


btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle("dark-mode-btn--active")
  const isDark = document.body.classList.toggle('dark')

  if (isDark) {
    localStorage.setItem('darkMode', 'dark')
  } else {
    localStorage.setItem('darkMode', 'light')
  }
}