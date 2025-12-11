import './App.css'

function App() {
  return (
    <main className="min-h-screen bg-white p-8 md:p-20 max-w-6xl mx-auto space-y-24">
      
      {/* Header */}
      <header className="border-b border-gray-200 pb-8">
        <h1 className="mb-4">Typography System</h1>
        <p className="body-l text-gray-600 max-w-2xl">
          Complete typography system with primitives and semantic tokens. 
          Uses Instrument Sans for headings/labels and Inter for body text.
        </p>
      </header>

      {/* 1. HEADINGS & DISPLAY */}
      <section className="space-y-12">
        <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
          <span className="label-xs bg-black text-white px-2 py-1 rounded">INSTRUMENT SANS</span>
          <span className="label-xs text-gray-400">HEADINGS</span>
        </div>

        <div className="space-y-10">
          {/* Display */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline">
            <div className="md:col-span-1 text-xs font-mono text-gray-400">.display</div>
            <div className="md:col-span-3">
              <span className="display text-gray-900">Display Title</span>
            </div>
          </div>

          {/* H1 - H6 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline">
            <div className="md:col-span-1 text-xs font-mono text-gray-400">&lt;h1&gt; or .h1</div>
            <div className="md:col-span-3">
              <h1>Heading Level t 1</h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline">
            <div className="md:col-span-1 text-xs font-mono text-gray-400">&lt;h2&gt; or .h2</div>
            <div className="md:col-span-3">
              <h2>Heading Level 2</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline">
            <div className="md:col-span-1 text-xs font-mono text-gray-400">&lt;h3&gt; or .h3</div>
            <div className="md:col-span-3">
              <h3>Heading Level 3</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline">
            <div className="md:col-span-1 text-xs font-mono text-gray-400">&lt;h4&gt; or .h4</div>
            <div className="md:col-span-3">
              <h4>Heading Level 4</h4>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline">
            <div className="md:col-span-1 text-xs font-mono text-gray-400">&lt;h5&gt; or .h5</div>
            <div className="md:col-span-3">
              <h5>Heading Level 5</h5>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline">
            <div className="md:col-span-1 text-xs font-mono text-gray-400">&lt;h6&gt; or .h6</div>
            <div className="md:col-span-3">
              <h6>Heading Level 6</h6>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BODY TEXT */}
      <section className="space-y-12">
        <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
          <span className="label-xs bg-gray-200 text-gray-800 px-2 py-1 rounded">INTER</span>
          <span className="label-xs text-gray-400">BODY</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Large */}
          <div className="space-y-6">
            <div>
              <code className="text-xs text-blue-600 block mb-2">.body-l</code>
              <p className="body-l text-gray-600">
                Large body text is used for introductions. The quick brown fox jumps over the lazy dog.
              </p>
            </div>
            <div>
              <code className="text-xs text-blue-600 block mb-2">.body-l-medium</code>
              <p className="body-l-medium text-gray-900">
                Large body text with medium weight for emphasis.
              </p>
            </div>
          </div>

          {/* Base */}
          <div className="space-y-6">
            <div>
              <code className="text-xs text-blue-600 block mb-2">.body-m</code>
              <p className="body-m text-gray-600">
                Base body text for most content. The quick brown fox jumps over the lazy dog.
              </p>
            </div>
            <div>
              <code className="text-xs text-blue-600 block mb-2">.body-m-medium</code>
              <p className="body-m-medium text-gray-900">
                Base body text with medium weight.
              </p>
            </div>
          </div>

          {/* Small */}
          <div className="space-y-6">
            <div>
              <code className="text-xs text-blue-600 block mb-2">.body-s</code>
              <p className="body-s text-gray-600">
                Small body text for captions and legal copy. The quick brown fox jumps over the lazy dog.
              </p>
            </div>
            <div>
              <code className="text-xs text-blue-600 block mb-2">.body-s-medium</code>
              <p className="body-s-medium text-gray-900">
                Small body text with medium weight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LABELS */}
      <section className="space-y-12">
        <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
          <span className="label-xs bg-black text-white px-2 py-1 rounded">INSTRUMENT SANS</span>
          <span className="label-xs text-gray-400">LABELS</span>
        </div>

        <div className="flex flex-wrap gap-8 items-end">
          <div className="space-y-2">
             <code className="text-xs text-gray-400 block">.label-l</code>
             <span className="label-l bg-gray-100 px-4 py-2 rounded text-gray-900 inline-block">
               Label Large
             </span>
          </div>

          <div className="space-y-2">
             <code className="text-xs text-gray-400 block">.label-m</code>
             <span className="label-m bg-gray-100 px-3 py-1.5 rounded text-gray-900 inline-block">
               Label Medium
             </span>
          </div>

          <div className="space-y-2">
             <code className="text-xs text-gray-400 block">.label-s</code>
             <span className="label-s bg-gray-100 px-3 py-1 rounded text-gray-900 inline-block">
               Label Small
             </span>
          </div>

          <div className="space-y-2">
             <code className="text-xs text-gray-400 block">.label-xs</code>
             <span className="label-xs bg-gray-100 px-2 py-1 rounded text-gray-900 inline-block">
               Label XS
             </span>
          </div>
        </div>
      </section>

      {/* 4. USAGE EXAMPLE */}
      <section className="space-y-8">
        <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
          <span className="label-xs bg-blue-600 text-white px-2 py-1 rounded">EXAMPLE</span>
          <span className="label-xs text-gray-400">REAL WORLD USAGE</span>
        </div>

        <article className="bg-gray-50 p-8 rounded-lg space-y-6">
          <h2 className="text-gray-900">Building Better Products</h2>
          
          <p className="body-l text-gray-700">
            This is an introduction paragraph using large body text. It sets the stage 
            for the content that follows and provides context to the reader.
          </p>

          <h3 className="text-gray-900">Key Features</h3>
          
          <p className="body-m text-gray-600">
            The base body text is perfect for main content. It's comfortable to read 
            at length and works well for most paragraph text in your application.
          </p>

          <div className="flex gap-3 flex-wrap">
            <button className="label-m bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="label-m border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Learn More
            </button>
          </div>

          <p className="body-s text-gray-500 mt-4">
            * Terms and conditions apply. This is small text used for legal copy and captions.
          </p>
        </article>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="body-m-medium text-gray-900">Typography System</p>
            <p className="body-s text-gray-500">Built with Tailwind CSS and custom primitives</p>
          </div>
          <span className="label-xs text-gray-400">v1.0.0</span>
        </div>
      </footer>

    </main>
  )
}

export default App