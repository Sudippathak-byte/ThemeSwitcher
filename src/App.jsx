import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto ">
              <Card
                image="https://newbusinessage-media.s3.ap-south-1.amazonaws.com/img/news/20220810040525_apple.jpg"
                title="Mustang Apple"
                price="60"
                rating={4}
                buttonText="Buy Now"
                onButtonClick={() => alert("Added Fresh Mustang apple")}
            />
            
            
            <Card
                image="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2016/09/Jumla-apples.jpg"
                title="jumla Apple"
                price="40"
                rating={5}
                buttonText="Buy Now"
                onButtonClick={() => alert("Added Jumla apple")}
            />
            <Card
                image="https://english.onlinekhabar.com/wp-content/uploads/2021/09/jumla-apple-12.jpg"
                title="Dolpa Apple"
                price="45"
                rating={4.5}
                buttonText="Buy Now"
                onButtonClick={() => alert("Added Fresh dolpa apple")}
            />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
