
<body>
  <h1>SystemSchool</h1

  <p>
    Esse sistema simula a gestão de alunos e provas de uma escola. Ele usa o padrão <strong>Arquitetura Hexagonal</strong>,
    com separação de entidades, serviços e repositórios.
  </p>

  <h2>🧠 Conceito Principal</h2>
  <ul>
    <li>Os <strong>alunos</strong> são criados com dados como nome, idade, turma, etc.</li>
    <li>É possível <strong>adicionar provas</strong> a um aluno.</li>
    <li>O sistema usa um repositório na memória (simulado).</li>
  </ul>

  <h2>🛠️ Como Usar</h2>
  <ol>
    <li>Crie um repositório de alunos em memória com:
      <pre><code>const repo = new MemoryRepository()</code></pre>
    </li>
    <li>Crie o serviço que controla os alunos:
      <pre><code>const serv = new StudentsService(repo)</code></pre>
    </li>
    <li>Crie um aluno:
      <pre><code>
serv.NewStudent({
  Age: 12,
  Class: 7,
  Name: "Nicolas",
  Notes: ["Aluno conversou na hora da explicação"],
  Exams: [],
  Shift: "Morning",
})
      </code></pre>
    </li>
    <li>Crie uma prova para esse aluno:
      <pre><code>
const exam = new Exam({
  NoteValue: 10,
  Subject: "Math",
})
exam.CreateDateForTheExam(10, 2, 20)
serv.AddExamForStudent(exam.data, 0)
      </code></pre>
    </li>
    <li>Busque o aluno e veja seus dados:
      <pre><code>console.log(serv.FindStudent(0))</code></pre>
    </li>
  </ol>

  <h2>📦 Estrutura do Projeto</h2>
  <ul>
    <li><strong>core/entities/</strong>: Lógica dos objetos (Aluno e Prova).</li>
    <li><strong>core/services/</strong>: Regras de negócio, como adicionar provas e criar alunos.</li>
    <li><strong>ports/</strong>: Interface dos repositórios.</li>
    <li><strong>adapters/repositorys/</strong>: Implementações reais do repositório (neste caso, em memória).</li>
    <li><strong>app.ts</strong>: Ponto de entrada da aplicação com a função <code>Main()</code>.</li>
  </ul>

  <h2>🧪 Resultado Esperado</h2>
  <p>Depois de rodar o <code>Main()</code>, o console vai mostrar os dados do aluno criado com a prova adicionada.</p>

  <h2>🚀 Execução</h2>
  <ol>
    <li>Instale as dependências (se houver): <code>npm install</code></li>
    <li>Execute: <code>npm run dev-tsc</code> ou compile com <code>npm run build</code> e rode com <code>npm run dev</code></li>
  </ol>

  <h2>💬 Observações</h2>
  <ul>
    <li>Esse sistema é apenas uma simulação, ideal para testes e aprendizado de arquitetura hexagonal.</li>
    <li>Você pode evoluir ele para usar banco de dados, API REST, e até frontend futuramente.</li>
  </ul>
</body>
</html>
