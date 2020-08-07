import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
function TeacherItem() {
    return (
        <article className="teacher-item">
                  <header>
                      <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGLykgZ8iq7NQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=fRCBGbnyX1GSisX7aacoX26PbXyLisA87Ree19c8zUg" alt="Guilherme Machado"/>
                        <div>
                            <strong>Guilherme Machado</strong>
                            <span>Física</span>    
                        </div>       
                  
                  </header>

                  <p>
                      Entusiasta das melhores tecnologias de Fisica quantica
                      <br /><br />
                      Apaixonado por estudar física e essas doideras ai, ja mudou a vida de muitas pessoas com seus calculos errados.
                  </p>

                  <footer>
                      <p>
                          Preço/hora 
                          <strong>R$80,00</strong>
                      </p>
                      <button type="button">
                          <img src={whatsappIcon} alt="Whatsapp"/>
                          Entrar em contato
                      </button>
                  </footer>
              </article>
    )
}

export default TeacherItem;