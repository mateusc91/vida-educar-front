//import Index from "views/Index.js";
import Crm from "views/examples/Crm.js";
import Cadastro from "views/examples/Cadastro.js";
//import Profile from "views/examples/Profile.js";
//import Funcionario from "./components/Funcionario/Funcionario.js";
// import Maps from "views/examples/Maps.js";
// import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
// import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import PaginaEmConstrucao from "views/PaginaEmConstrucao.js";

var routes = [
  {
    path: "/cadastros",
    name: "Cadastros",
    icon: "ni ni-folder-17 text-primary",
    component: Cadastro,
    layout: "/admin"
  },
  {
    path: "/index",
    name: "Secretaria",
    icon: "ni ni-badge text-primary",
    component: PaginaEmConstrucao,
    layout: "/admin"
  },
  {
    path: "/index",
    name: "Financeiro",
    icon: "ni ni-money-coins text-primary",
    component: PaginaEmConstrucao,
    layout: "/admin"
  },
  {
    path: "/index",
    name: "Academico",
    icon: "ni ni-book-bookmark text-primary",
    component: PaginaEmConstrucao,
    layout: "/admin"
  },
  {
    path: "/index",
    name: "Gerenciar Portal",
    icon: "ni ni-tv-2 text-primary",
    component: PaginaEmConstrucao,
    layout: "/admin"
  },
  {
    path: "/index",
    name: "Biblioteca",
    icon: "ni ni-collection text-primary",
    component: PaginaEmConstrucao,
    layout: "/admin"
  },
  {
    path: "/pagina-em-construcao",
    name: "Almoxarifado",
    icon: "ni ni-building text-primary",
    component: PaginaEmConstrucao,
    layout: "/admin"
  },
  {
    path: "/crm",
    name: "CRM",
    icon: "ni ni-chart-bar-32 text-primary",
    component: Crm,
    layout: "/admin"
  },
  {
    path: "/index",
    name: "Email em Massa",
    icon: "ni ni-laptop text-primary",
    component: PaginaEmConstrucao,
    layout: "/admin"
  },
  {
    path: "/index",
    name: "SMS",
    icon: "ni ni-send text-primary",
    component: PaginaEmConstrucao,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: Profile,
  //   layout: "/admin"
  // },
  //  {
  //   path: "/funcionarios",
  //   name: "RH",
  //   icon: "ni ni-badge text-red",
  //   component: Funcionario,
  //   layout: "/admin"
  // },
  {
    path: "/login",
    name: "Logout",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  }
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth"
  // }
];
export default routes;
