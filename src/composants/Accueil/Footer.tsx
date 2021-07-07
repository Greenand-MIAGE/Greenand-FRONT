import '../../styles/style.css'

function Footer() {
  return (
    <div>

      <div className="container-fluid" >
        <footer className="text-center text-white" >

          <div className="container pt-4">

            <section className="mb-4">

              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i className="fab fa-facebook-f"></i
              ></a>


              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i className="fab fa-twitter"></i
              ></a>


              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i className="fab fa-google"></i
              ></a>


              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i className="fab fa-instagram"></i
              ></a>



              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i className="fab fa-linkedin"></i
              ></a>

              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i className="fab fa-github"></i
              ></a>
            </section>

          </div>

          <div className="text-center p-3 copyright" >
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>

        </footer>
      </div >
    </div>
  )
}

export default Footer
