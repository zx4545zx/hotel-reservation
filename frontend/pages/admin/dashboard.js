import { useState } from 'react'

const Dashboard = () => {
  const [quickview, setQuickview] = useState(false)

  return (
    <main className="container">
      <p className="title">Dashboard</p>
      <p className="block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper
        diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat
        tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit
        amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut
        quam.
      </p>
      <p className="block">
        Suspendisse varius ligula in molestie lacinia. Maecenas varius eget
        ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus,
        augue diam porttitor lorem, et sollicitudin felis neque sit amet erat.
        Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit
        amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget
        varius ligula, at volutpat tortor.
      </p>
      <p className="block">
        Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat,
        vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et
        pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta.
        Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.
      </p>

      <div
        id="quickviewDefault"
        className={`quickview ${quickview && 'is-active'}`}
      >
        <header className="quickview-header">
          <p className="title">Quickview title</p>
          <span
            className="delete"
            data-dismiss="quickview"
            onClick={() => setQuickview(false)}
          ></span>
        </header>

        <div className="quickview-body">
          <div className="quickview-block">...</div>
        </div>

        <footer className="quickview-footer"></footer>
      </div>

      <button
        className="button is-primary"
        data-show="quickview"
        data-target="quickviewDefault"
        onClick={() => setQuickview(!quickview)}
      >
        Show quickview
      </button>
    </main>
  )
}

export default Dashboard
