import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from './components/view'
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Services from './pages/services/listagem';
import Profile from './pages/profile';
import Footer from './components/footer';
import JuntarSe from './components/juntarse';
import AdmAndamentoPage from './pages/admin/andamento';
import AdmHistoricoPage from './pages/admin/historico';
import AdmContatosPage from './pages/admin/contatos';
import BuscarUsuarioPage from './pages/profile/pesquisarUsuario';
import EditarPerfil from './pages/profile/editar';
import Gerenciar from './pages/services/usuario'
import ProfissionalPage from './pages/profile/profisisonal';
import SuportePage from './pages/support';
import SobrePage from './pages/about';

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<View><Home /> <Footer /> </View> } />
                <Route path='/login' element={<Login />} />
                <Route path='/cadastro' element={<Register />} />
                <Route path='/servicos/usuario' element={<View><Gerenciar /></View>} /> 
                <Route path='/servicos' element={<View><Services /> <Footer /> </View>} />
                <Route path='/suporte' element={<View><SuportePage /> <Footer /> </View> } />
                <Route path='/sobre' element={<View><SobrePage /> <Footer /> </View> } />
                <Route path='/perfil' element={<View><Profile /> <Footer /> </View>} />
                <Route path='/perfil/pesquisa' element={<View><BuscarUsuarioPage />  </View>} />
                <Route path='/perfil/editar' element={<View><EditarPerfil />  </View>} />
                <Route path='/perfil/editar/profissional' element={<View><ProfissionalPage />  </View>} />
                <Route path='/perfil/adm/andamento' element={<View><AdmAndamentoPage />  </View>} />
                <Route path='/perfil/adm/historico' element={<View><AdmHistoricoPage />  </View>} />
                <Route path='/perfil/adm/contato' element={<View><AdmContatosPage />  </View>} />
                <Route path='/juntar' element={<JuntarSe />} />
                <Route path='/footer' element={<Footer />} />
            </Routes>
        </BrowserRouter>
    );
};