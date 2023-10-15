import { useState } from 'react'
import './App.css'
import Carde from '.\\carde'
import logo from 'D:\\DEV\\PROJETOS\\pprojetoloja\\lojavirtual\\src\\imagens\\Untitled.jpg'
import instagram from 'D:\\DEV\\PROJETOS\\pprojetoloja\\lojavirtual\\src\\imagens\\instagram.png'
import whatssapp from 'D:\\DEV\\PROJETOS\\pprojetoloja\\lojavirtual\\src\\imagens\\whatsapp.png'
import gmail from 'D:\\DEV\\PROJETOS\\pprojetoloja\\lojavirtual\\src\\imagens\\gmail.png'

function App() {
  

  return (
    <>
      <main>
       
        <a href="" className="links"><img src={instagram} className='contatos' /></a>
        <a href="" className="links"><img src={whatssapp} className='contatos' /></a>
        <a href="" className="links"><img src={gmail}  className='contatos' id='gmail'/></a>
      </main>
      <div id='imgg'>

        <div id='containertextimg'>
          <div id='containerlogo'>
            <img src={logo} id='logo' />
          </div>
          <details>

            <ul>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui non amet
                molestiae dolores quidem nemo nihil ipsum necessitatibus laborum neque
                rem labore dolorum incidunt consectetur ducimus aspernatur, blanditiis
                maiores similique. Lorem ipsum dolor sit, amet consectetur adipisicing
              </p>
            </ul>
          </details>
        </div>

      </div>
      <div id='separa'>

      </div>
      <div id='grid'>
        {/* <a href="" className='link_card'><div className='card'>
          
          </div></a>
        <a href="" className='link_card'><div className='card'>
          
          
          </div></a>
        <a href="" className='link_card'><div className='card'>
          
          
          </div></a>
        <a href="" className='link_card'><div className='card'>
          
          </div></a> */}
        
        <Carde></Carde>
        <Carde></Carde>
        <Carde></Carde>
        <Carde></Carde>

        
        
        
      </div>
      <footer>

      </footer>
    </>
  )
}

export default App
