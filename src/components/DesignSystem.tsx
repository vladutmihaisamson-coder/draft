import React, { useEffect, useState } from 'react'

function useCssVar(varName: string, fallback = ''): string {
  const [value, setValue] = useState(fallback)
  useEffect(() => {
    const root = document.documentElement
    const read = () => {
      const v = getComputedStyle(root).getPropertyValue(varName).trim()
      setValue(v || fallback)
    }
    read()
    // In case tokens change at runtime, observe changes to the root style
    const observer = new MutationObserver(read)
    observer.observe(root, { attributes: true, attributeFilter: ['style'] })
    return () => observer.disconnect()
  }, [varName, fallback])
  return value
}

const DesignSystem: React.FC = () => {
  const primary = useCssVar('--bs-primary', '#0d6efd')
  const secondary = useCssVar('--bs-secondary', '#6c757d')
  const success = useCssVar('--bs-success', '#198754')
  const danger = useCssVar('--bs-danger', '#dc3545')
  const warning = useCssVar('--bs-warning', '#ffc107')
  const info = useCssVar('--bs-info', '#0dcaf0')
  // const attention = useCssVar('--bs-attention', danger)

  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-xl-10">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark mb-3">Design System</h1>
            <p className="lead text-muted">Bootstrap 5 design tokens and components</p>
          </div>

          {/* Colors Section */}
          <section className="mb-5">
            <h2 className="h3 fw-bold text-dark mb-4">Colors</h2>
            <p className="text-muted mb-4">Bootstrap's color palette includes semantic colors and theme colors for consistent design.</p>
            
            <div className="row g-4">
              {/* Primary Colors */}
              <div className="col-12 col-md-6 col-lg-4">
                <h4 className="h6 fw-semibold mb-3">Primary Colors</h4>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-primary rounded" style={{ width: '40px', height: '40px' }}></div>
                    <div>
                      <div className="fw-medium">Primary</div>
                      <small className="text-muted">{primary}</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-secondary rounded" style={{ width: '40px', height: '40px' }}></div>
                    <div>
                      <div className="fw-medium">Secondary</div>
                      <small className="text-muted">{secondary}</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-success rounded" style={{ width: '40px', height: '40px' }}></div>
                    <div>
                      <div className="fw-medium">Success</div>
                      <small className="text-muted">{success}</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Semantic Colors */}
              <div className="col-12 col-md-6 col-lg-4">
                <h4 className="h6 fw-semibold mb-3">Semantic Colors</h4>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-danger rounded" style={{ width: '40px', height: '40px' }}></div>
                    <div>
                      <div className="fw-medium">Danger</div>
                      <small className="text-muted">{danger}</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-warning rounded" style={{ width: '40px', height: '40px' }}></div>
                    <div>
                      <div className="fw-medium">Warning</div>
                      <small className="text-muted">{warning}</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-info rounded" style={{ width: '40px', height: '40px' }}></div>
                    <div>
                      <div className="fw-medium">Info</div>
                      <small className="text-muted">{info}</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Neutral Colors */}
              <div className="col-12 col-md-6 col-lg-4">
                <h4 className="h6 fw-semibold mb-3">Neutral Colors</h4>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-light border rounded" style={{ width: '40px', height: '40px' }}></div>
                    <div>
                      <div className="fw-medium">Light</div>
                      <small className="text-muted">#f8f9fa</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-dark rounded" style={{ width: '40px', height: '40px' }}></div>
                    <div>
                      <div className="fw-medium">Dark</div>
                      <small className="text-muted">#212529</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Typography Section */}
          <section className="mb-5">
            <h2 className="h3 fw-bold text-dark mb-4">Typography</h2>
            <p className="text-muted mb-4">Bootstrap's typography system provides consistent text styling and hierarchy.</p>
            
            {/* Headings */}
            <div className="mb-4">
              <h3 className="h5 fw-semibold mb-3">Headings</h3>
              <div className="bg-light p-4 rounded">
                <h1 className="display-1">Display 1</h1>
                <h1 className="display-2">Display 2</h1>
                <h1 className="display-3">Display 3</h1>
                <h1 className="display-4">Display 4</h1>
                <h1 className="display-5">Display 5</h1>
                <h1 className="display-6">Display 6</h1>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
              </div>
            </div>

            {/* Body Text */}
            <div className="mb-4">
              <h3 className="h5 fw-semibold mb-3">Body Text</h3>
              <div className="bg-light p-4 rounded">
                <p className="lead">This is a lead paragraph. It stands out from regular paragraphs.</p>
                <p>This is a regular paragraph with <strong>bold text</strong>, <em>italic text</em>, and <a href="#" className="text-decoration-none">links</a>.</p>
                <p className="small">This is small text for less important information.</p>
                <p className="text-muted">This is muted text for secondary information.</p>
              </div>
            </div>

            {/* Text Utilities */}
            <div className="mb-4">
              <h3 className="h5 fw-semibold mb-3">Text Utilities</h3>
              <div className="bg-light p-4 rounded">
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <div className="fw-bold">Bold text</div>
                    <div className="fw-semibold">Semibold text</div>
                    <div className="fw-normal">Normal weight text</div>
                    <div className="fw-light">Light weight text</div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="text-start">Left aligned text</div>
                    <div className="text-center">Center aligned text</div>
                    <div className="text-end">Right aligned text</div>
                    <div className="text-uppercase">Uppercase text</div>
                    <div className="text-lowercase">Lowercase text</div>
                    <div className="text-capitalize">Capitalized text</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Buttons Section */}
          <section className="mb-5">
            <h2 className="h3 fw-bold text-dark mb-4">Buttons</h2>
            <p className="text-muted mb-4">Bootstrap provides various button styles and sizes for different use cases.</p>
            
            <div className="bg-light p-4 rounded">
              <div className="mb-3">
                <h4 className="h6 fw-semibold mb-2">Button Variants</h4>
                <div className="d-flex flex-wrap gap-2">
                  <button className="btn btn-primary">Primary</button>
                  <button className="btn btn-secondary">Secondary</button>
                  <button className="btn btn-success">Success</button>
                  <button className="btn btn-danger">Danger</button>
                  <button className="btn btn-warning">Warning</button>
                  <button className="btn btn-info">Info</button>
                  <button className="btn btn-light">Light</button>
                  <button className="btn btn-dark">Dark</button>
                  <button className="btn btn-link">Link</button>
                </div>
              </div>
              
              <div className="mb-3">
                <h4 className="h6 fw-semibold mb-2">Button Sizes</h4>
                <div className="d-flex flex-wrap align-items-center gap-2">
                  <button className="btn btn-primary btn-sm">Small</button>
                  <button className="btn btn-primary">Default</button>
                  <button className="btn btn-primary btn-lg">Large</button>
                </div>
              </div>
              
              <div className="mb-3">
                <h4 className="h6 fw-semibold mb-2">Button States</h4>
                <div className="d-flex flex-wrap gap-2">
                  <button className="btn btn-primary">Normal</button>
                  <button className="btn btn-primary active">Active</button>
                  <button className="btn btn-primary" disabled>Disabled</button>
                </div>
              </div>
            </div>
          </section>

          {/* Cards Section */}
          <section className="mb-5">
            <h2 className="h3 fw-bold text-dark mb-4">Cards</h2>
            <p className="text-muted mb-4">Cards provide a flexible and extensible content container with multiple variants.</p>
            
            <div className="row g-4">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Basic Card</h5>
                    <p className="card-text">This is a basic card with some example text content.</p>
                    <a href="#" className="btn btn-primary">Action</a>
                  </div>
                </div>
              </div>
              
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Card with Header</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-text">This card includes a header section.</p>
                  </div>
                  <div className="card-footer text-muted">
                    Footer content
                  </div>
                </div>
              </div>
              
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card border-primary">
                  <div className="card-body">
                    <h5 className="card-title text-primary">Bordered Card</h5>
                    <p className="card-text">This card has a colored border.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Forms Section */}
          <section className="mb-5">
            <h2 className="h3 fw-bold text-dark mb-4">Forms</h2>
            <p className="text-muted mb-4">Form controls and input groups for user interaction.</p>
            
            <div className="bg-light p-4 rounded">
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <label htmlFor="textInput" className="form-label">Text Input</label>
                  <input type="text" className="form-control" id="textInput" placeholder="Enter text" />
                </div>
                <div className="col-12 col-md-6">
                  <label htmlFor="emailInput" className="form-label">Email Input</label>
                  <input type="email" className="form-control" id="emailInput" placeholder="Enter email" />
                </div>
                <div className="col-12 col-md-6">
                  <label htmlFor="selectInput" className="form-label">Select</label>
                  <select className="form-select" id="selectInput">
                    <option>Choose option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <label htmlFor="textareaInput" className="form-label">Textarea</label>
                  <textarea className="form-control" id="textareaInput" rows={3} placeholder="Enter message"></textarea>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="checkbox1" />
                    <label className="form-check-label" htmlFor="checkbox1">
                      Checkbox option
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="radioGroup" id="radio1" />
                    <label className="form-check-label" htmlFor="radio1">
                      Radio option 1
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Alerts Section */}
          <section className="mb-5">
            <h2 className="h3 fw-bold text-dark mb-4">Alerts</h2>
            <p className="text-muted mb-4">Contextual feedback messages for user actions.</p>
            
            <div className="d-flex flex-column gap-3">
              <div className="alert alert-primary" role="alert">
                <strong>Primary alert!</strong> This is a primary alert with an example link.
              </div>
              <div className="alert alert-secondary" role="alert">
                <strong>Secondary alert!</strong> This is a secondary alert.
              </div>
              <div className="alert alert-success" role="alert">
                <strong>Success alert!</strong> This is a success alert.
              </div>
              <div className="alert alert-danger" role="alert">
                <strong>Danger alert!</strong> This is a danger alert.
              </div>
              <div className="alert alert-warning" role="alert">
                <strong>Warning alert!</strong> This is a warning alert.
              </div>
              <div className="alert alert-info" role="alert">
                <strong>Info alert!</strong> This is an info alert.
              </div>
            </div>
          </section>

          {/* Spacing Section */}
          <section className="mb-5">
            <h2 className="h3 fw-bold text-dark mb-4">Spacing</h2>
            <p className="text-muted mb-4">Bootstrap's spacing utilities for consistent layout and spacing.</p>
            
            <div className="bg-light p-4 rounded">
              <h4 className="h6 fw-semibold mb-3">Margin Examples</h4>
              <div className="d-flex flex-wrap gap-2 mb-4">
                <div className="bg-primary text-white p-2 m-1">m-1</div>
                <div className="bg-primary text-white p-2 m-2">m-2</div>
                <div className="bg-primary text-white p-2 m-3">m-3</div>
                <div className="bg-primary text-white p-2 m-4">m-4</div>
                <div className="bg-primary text-white p-2 m-5">m-5</div>
              </div>
              
              <h4 className="h6 fw-semibold mb-3">Padding Examples</h4>
              <div className="d-flex flex-wrap gap-2">
                <div className="bg-secondary text-white p-1">p-1</div>
                <div className="bg-secondary text-white p-2">p-2</div>
                <div className="bg-secondary text-white p-3">p-3</div>
                <div className="bg-secondary text-white p-4">p-4</div>
                <div className="bg-secondary text-white p-5">p-5</div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

export default DesignSystem
