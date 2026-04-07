function App() {
  return (
    <div className="h-full w-full overflow-auto" style={{ background: "#f0fdf4" }}>
      
      <header className="w-full border-b" style={{ background: "#065f46", borderColor: "#047857" }}>
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-green-100">
              Client Manager
            </h1>
            <p className="text-sm mt-1 text-green-200">
              Sistema de gerenciamento de clientes
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="text-lg font-semibold text-green-900">
          Cadastrar Cliente
        </h2>
      </main>

    </div>
  );
}

export default App;