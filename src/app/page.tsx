 
export default function Home() {
  return (
      <div className="h-screen flex flex-col">
        <div className="flex flex-1">
          <aside className="w-72 bg-zinc-950 p-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <nav className="space-y-4 mt-5">
                <a href="" className="flex items-center gap-2 text-xs font-semibold text-zinc-200 hover:text-white/20 transition-colors">
                <svg  className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                </svg>
                  Inicio
                </a>
                <a href="" className="flex items-center gap-2 text-xs font-semibold text-zinc-200 hover:text-white/20 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                </svg>
                  Procurar
                </a>
                <a href="" className="flex items-center gap-2 text-xs font-semibold text-zinc-200 hover:text-white/20 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"></path>
                </svg>
                  Sua Biblioteca
                </a>
            </nav>

            <nav className="mt-10 pt-6 border-t border-zinc-800 flex flex-col gap-2">
              <a href=""className="text-sn text-zinc-400 hover:text-white/30 transition-colors">Musicas Curtidas</a>
              <a href=""className="text-sn text-zinc-400 hover:text-white/30 transition-colors">Seus Episodios</a>
              <a href=""className="text-sn text-zinc-400 hover:text-white/30 transition-colors">PeeWeecast</a>
              <a href=""className="text-sn text-zinc-400 hover:text-white/30 transition-colors">Grooveria Gospel</a>
              <a href=""className="text-sn text-zinc-400 hover:text-white/30 transition-colors">TiTok Internacionais 2023</a>
              <a href=""className="text-sn text-zinc-400 hover:text-white/30 transition-colors">Black Total</a>
              <a href=""className="text-sn text-zinc-400 hover:text-white/30 transition-colors">Academia 2023</a>
              <a href=""className="text-sn text-zinc-400 hover:text-white/30 transition-colors">Filhos do Fogo</a>
              <a href=""className="text-sn text-zinc-400 hover:text-white/30 transition-colors">Louvores</a>
            </nav>
          </aside>
          <main className="flex-1 p-6">
            <div className="flex- items-center gap-3 space-x-3">
              <button className="w-7 h-7 rounded-full bg-black/40  ">
              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
              </svg>
              </button>
              <button className="w-7 h-7 rounded-full bg-black/40  ">
              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
              </svg>
              </button>
            </div>

            <h1 className="font-semiBold text-3xl mt-3">Boa tarde</h1>

              <div className="grid grid-cols-3 gap-6 mt-4">
                <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                  <img src="/img/eli.jpg" width={60} height={60}  alt="capa album monologos retratos" />
                  <strong>Eli Soares</strong>
                  <button className=" w-10 h-10 p-4 flex items-center justify-center rounded-full bg-green-400 text-black-400 ml-auto mr-3 invisible group-hover:visible" >
                  <svg className="" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                  </svg>
                  </button>
                </a>
                <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden">
                  <img src="/img/bruno.jpg" width={60} height={60} alt="capa album monologos retratos" />
                  <strong>Bruno Mars</strong>
                  <button className=" w-10 h-10 p-4 flex items-center justify-center rounded-full bg-green-400 text-black-400 ml-auto mr-3 invisible group-hover:visible " >
                  <svg className="" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                  </svg>
                  </button>
                </a>
                <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden ">
                  <img src="/img/coldplay.jpg"  width={60} height={60} alt="capa album monologos retratos" />
                  <strong>Coldplay</strong>
                  <button className=" w-10 h-10 p-4 flex items-center justify-center rounded-full bg-green-400 text-black-400 ml-auto mr-3 invisible group-hover:visible" >
                  <svg className="" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                  </svg>
                  </button>
                </a>
                <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden">
                  <img src="./img/marron.jpg"  width={60} height={60} alt="capa album monologos retratos" />
                  <strong>Maroon 5</strong>
                  <button className=" w-10 h-10 p-4 flex items-center justify-center rounded-full bg-green-400 text-black-400 ml-auto mr-3 invisible group-hover:visible" >
                  <svg className="" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                  </svg>
                  </button>
                </a>
                <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden">
                  <img src="./img/couting.jpg" width={60} height={60} alt="capa album monologos retratos" />
                  <strong>OneRepublic</strong>
                  <button className=" w-10 h-10 p-4 flex items-center justify-center rounded-full bg-green-400 text-black-400 ml-auto mr-3 invisible group-hover:visible" >
                  <svg className="" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                  </svg>
                  </button>
                </a>
                <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden">
                  <img src="./img/eminem.jpg" width={60} height={60} alt="capa album monologos retratos" />
                  <strong>Eminem</strong>
                  <button className=" w-10 h-10 p-4 flex items-center justify-center rounded-full bg-green-400 text-black-400 ml-auto mr-3 invisible group-hover:visible " >
                  <svg className="" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                  </svg>
                  </button>
                </a>
              </div>

              <h2 className="font-semiBold text-2xl mt-3">Seus programas</h2>
            <div className="grid grid-cols-5 gap-4 mt-4">
                <a href="" className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2">
                <img src="/img/album.jpg" className="w-full" width={60} height={60}  alt="capa album monologos retratos" />
                <strong className="font-semibold">Daily mix</strong>
                <span className="text-sm text-zinc-500">Eli soares, bee gees,frank sinatra </span>
                </a>
                <a href="" className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2">
                <img src="/img/internacional.jpg" className="w-full"  width={60} height={60}  alt="capa album monologos retratos" />
                <strong className="font-semibold">Pop internacional</strong>
                <span className="text-sm text-zinc-500">Miley cirus, drake, shakira</span>
                </a>
                <a href="" className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2">
                <img src="/img/sertanejo.jpg" className="w-full" width={60} height={60}  alt="capa album monologos retratos" />
                <strong className="font-semibold">Sertanejo mais tocadas</strong>
                <span className="text-sm text-zinc-500">marilia mendonça, leonardo, gustavo mioto</span>
                </a>
                <a href="" className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2">
                <img src="./img/gospel.jpg" className="w-full" width={60} height={60}  alt="capa album monologos retratos" />
                <strong className="font-semibold">Gospel</strong>
                <span className="text-sm text-zinc-500">Eli soares, talhes roberto, gabriela rocha</span>
                </a>
                <a href="" className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2">
                <img src="/img/retrospectiva.jpg" className="w-full" width={60} height={60}  alt="capa album monologos retratos" />
                <strong className="font-semibold"> Retrospectiva</strong>
                <span className="text-sm text-zinc-500">michael jackson, talhes roberto, AC/DC</span>
                </a>
            </div>
                
          </main>
        </div>
        <footer className="bg-zinc-800 border-t border-zinc-700 p-3 flex items-center justify-betwwen ">
          <div className="flex items-center gap-5">
              <img src="/img/eli.jpg" width={70} height={70}  alt="capa album monologos retratos" />
            <div className="flex flex-col">
               <strong className="font-normal">Os anjos te louvam</strong>
                <span className="text text-sm text-zinc-500">Eli soares</span>
            </div>
            <button className="w-5 h-5 flex items-center justify-betwwen gap-3 hover:text-green-500">
                  <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                  </svg>  
            </button>    
          </div>   
    
        <div className="flex flex-col items-center justify-between w-8/12">

            <a className="flex items-center w-full justify-center gap-3">
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white-500 gap-3 ">
                <svg className="hover:text-green-500/20 transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"></path><path d="m18 2 4 4-4 4"></path><path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2"></path><path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"></path><path d="m18 14 4 4-4 4"></path></svg>
                <svg className="hover:text-green-500/20 transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" x2="5" y1="19" y2="5"></line></svg>
              </button>
              
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white-500">
                <svg  className="hover:text-white/20 transition-colors" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </button>

              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white-500 gap-3">
              <svg className="hover:text-green-500/20 transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" x2="19" y1="5" y2="19"></line></svg>
              <svg className="hover:text-green-500/20 transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
              </button>
            </a>
            <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-400 ">0:31</span>
                  <div className="h-1 rounded-full w-96 bg-zinc-500 ">
                    <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
                  </div>
                  <span className="text-xs text-zinc-400">3:20</span>
            </div>
        </div>
        
        <a href="" className="flex items-center gap-3">  
          <svg className="hover:text-green-500/20 transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"></line><line x1="8" x2="21" y1="12" y2="12"></line><line x1="8" x2="21" y1="18" y2="18"></line><line x1="3" x2="3.01" y1="6" y2="6"></line><line x1="3" x2="3.01" y1="12" y2="12"></line><line x1="3" x2="3.01" y1="18" y2="18"></line></svg>
            <svg className="hover:text-green-500/20 transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="12" x="3" y="4" rx="2" ry="2"></rect><line x1="2" x2="22" y1="20" y2="20"></line></svg>
            <svg className="hover:text-green-500/20 transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
            <div className="h-1 rounded-full w-24 bg-zinc-500 ">
            <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
          <svg className="hover:text-green-500/20 transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
        </a>
          
        </footer>        
      </div>
  )
}
