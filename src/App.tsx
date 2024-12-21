import React from 'react';
import Header from './components/Header';
import MemberCard from './components/MemberCard';
import ServerInfo from './components/ServerInfo';

function App() {
  const members = [
    {
      name: "ZiploC",
      role: "Líder oficial",
      specialty: "DMERO SIN LIMITES",
      image: "https://media.discordapp.net/attachments/833519788709904385/1240892309177106533/IMG_20240207_004416_040.jpg?ex=6766f4c5&is=6765a345&hm=cbe084c3a9ef7b1860453bff04e856a45330af12ff7a5f119d3b74b7ba2945ee&=&format=webp&width=994&height=994",
    },
    {
      name: "Terzt",
      role: "Líder oficial",
      specialty: "LEYENDA DEL SAMP",
      image: "https://images-ext-1.discordapp.net/external/QUmJbBM3v_iVp4o802-V8I8rwGdQq4YbXvhnz5KHn7M/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/755569278237016125/8343e534fca803251002f12680f0fe74.png?format=webp&quality=lossless&width=512&height=512",
    },
    {
      name: "Dhrykell",
      role: "Segundo al Mando",
      specialty: "SUPERSTAR",
      image: "https://media.discordapp.net/attachments/833519788709904385/871239577027891230/Screenshot_2021-07-31-22-04-37-128_com.google.android.apps.photos2.jpg?ex=67678d96&is=67663c16&hm=406c5fe126b615aea1fe51dd19274e27989b225d734f62535d68a7e7c56cfa53&=&format=webp&width=1014&height=994",
    },
    {
      name: "flowgzs",
      role: "Líder",
      specialty: "REY EGO",
      image: "https://media.discordapp.net/attachments/1319875221615939614/1319884241215164456/image.png?ex=6767957d&is=676643fd&hm=2c602b8b4aab4a6570096546d437cae9bd2cf8f2821dfa130eaa07a63e9a895e&=&format=webp&quality=lossless&width=1078&height=994",
    },
    {
      name: "Drakorneta",
      role: "Líder",
      specialty: "REAL GANGSTA",
      image: "https://images-ext-1.discordapp.net/external/dbROCDXWb028elESQ15CLIF08U3ihFc3dZYBBSTTr6o/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/1102412648332677243/9082ad2f1d6dad0d7178408ced5060db.png?format=webp&quality=lossless&width=874&height=874",
    },
    {
      name: "tempest",
      role: "Sub Líder",
      specialty: "CAZADOR DE DMEROS",
      image: "https://media.discordapp.net/attachments/833519788709904385/1099837693308960819/1814630664.jpg?ex=67674dac&is=6765fc2c&hm=f88eef66b775696e024cc831c9cca78df8b99ca5057f716e4185b23a220181dc&=&format=webp&width=1000&height=994",
    },
    {
      name: "Khystherkz",
      role: "Sub Líder",
      specialty: "ROLERO DE CUEVA",
      image: "https://images-ext-1.discordapp.net/external/nUCBm5ZHdp0zndOwPh6w1LJ5D-G2A1-oT5LE7hriHYw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/1140304658468966553/9a31cb1f47521d317f25def6faf42f91.png?format=webp&quality=lossless&width=448&height=448",
    },
  ];

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1601370690183-1c7796ecec61?auto=format&fit=crop&q=80&w=1920')] bg-fixed bg-cover bg-center">
      <div className="min-h-screen bg-gradient-to-br from-black/95 via-purple-900/90 to-black/95">
        <Header />
        
        <main className="container mx-auto px-4 py-8 space-y-16">
          {/* Home Section */}
          <section id="home" className="text-center space-y-6 py-20">
            <div className="inline-block bg-black/50 px-8 py-4 rounded-lg border-6 border-purple-500/20">
              <h1 className="text-6xl font-gang text-white mb-4 
                           drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                $- xXH34DSH00T3RZXx -$ 
              </h1>
            </div>
            <p className="text-4xl text-gray-90 max-w-3xl mx-auto font-text leading-relaxed">
              Desde 2019 domando bobos, delirantes y truchos. Somos una banda full DM, llena de leyendas del SAMP y la LEALTAD por encima de todo.
            </p>
          </section>

          {/* Members Section */}
          <section id="members" className="py-16">
            <h2 className="text-5xl font-gang text-white text-center mb-12">
              Lideres de Banda
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member) => (
                <MemberCard key={member.name} {...member} />
              ))}
            </div>
          </section>

          {/* Server Section */}
          <section id="server" className="py-16">
            <h2 className="text-5xl font-gang text-white text-center mb-12">
              ¿En que servidor estamos actualmente?
            </h2>
            <ServerInfo />
          </section>
        </main>

        <footer className="bg-black/90 text-white py-6 text-center border-t border-purple-500/20">
          <p className="text-purple-400 font-text text-xl">
            © 2024 xXH34DSH00T3RZXx - GVNGST4RS
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;