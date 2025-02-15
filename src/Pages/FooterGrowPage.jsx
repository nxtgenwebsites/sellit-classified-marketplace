import React from 'react'
import Container from 'react-bootstrap/Container'
import '../CSS/footer-grow-css.css'

export default function FooterGrowPage() {
  return (
    <div>
      <Container>
        <div class="m-4">
          <div class="accordion" id="myAccordion">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button type="button" class="accordion-button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne">1. What is HTML?</button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#myAccordion">
                <div class="card-body">
                  <p>HTML stands for HyperText Markup Language. HTML is the standard markup language for
                    describing the structure of web pages.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo">2. What is Bootstrap?</button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div class="card-body">
                  <p>Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web
                    development. It is a collection of CSS and HTML conventions.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree">3. What is CSS?</button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div class="card-body">
                  <p>CSS stands for Cascading Style Sheet. CSS allows you to specify various style properties for
                    a given HTML element such as colors, backgrounds, fonts etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}