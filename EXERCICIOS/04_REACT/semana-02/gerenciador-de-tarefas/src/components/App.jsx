import './app.css';

import Routes from '../router/Routes';

export default function App() {
  return (
   <Routes/>
  );
}

// export function AppVisualizar() {
//   return (
//     <main>
//       <div className="container">

//         <ExternalCard title="Lista De Tarefas - vizualizar">
//           <div className="row space-evenly">
//             <Botao>Voltar</Botao>
//             <span className="flex2"></span>
//           </div>

//           <TarefaEditar title="Minha primeira tarefa" readOnly="true">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, saepe quidem animi illo, accusamus consequuntur, voluptatum ipsa voluptatem quo repudiandae nihil veritatis? Ipsa fuga dolorem est labore itaque dolores corporis.
//           </TarefaEditar>
//         </ExternalCard>

//       </div>
//     </main>
//   );
// }

// export function AppEditar() {
//   return (
//     <main>
//       <div className="container">

//         <ExternalCard title="Lista De Tarefas - editar">
//           <div className="row space-evenly">
//             <Botao>Voltar</Botao>
//             <span className="flex1"></span>
//             <Botao>Salvar</Botao>
//           </div>

//           <TarefaEditar title="Minha primeira tarefa" readOnly="false">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, saepe quidem animi illo, accusamus consequuntur, voluptatum ipsa voluptatem quo repudiandae nihil veritatis? Ipsa fuga dolorem est labore itaque dolores corporis.
//           </TarefaEditar>
//         </ExternalCard>

//       </div>
//     </main>
//   );
// }
