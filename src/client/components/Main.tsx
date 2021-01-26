const React = require('react');

function Main() {
  return (
    <div className="container py-md-5">
      <div className="row align-items-center">
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
          <form action="#" method="POST" id="registration-form">
            <div className="form-group">
              {/* <label htmlFor="username-register" className="text-muted mb-1">
                <small>Username</small>
              </label> */}
              <input
                name="test1_data1"
                id="test1_data1"
                className="form-control"
                type="text"
                placeholder="Test 1 Data 1"
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              {/* <label htmlFor="email-register" className="text-muted mb-1">
                <small>Email</small>
              </label> */}
              <input
                name="test1_data2"
                id="test1_data2"
                className="form-control"
                type="text"
                placeholder="Test 1 Data 2"
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              {/* <label htmlFor="password-register" className="text-muted mb-1">
                <small>Password</small>
              </label> */}
              <input
                name="test1_data3"
                id="test1_data3"
                className="form-control"
                type="test"
                placeholder="Test 1 Data 3"
              />
            </div>

            <button
              type="submit"
              className="py-3 mt-4 btn btn-lg btn-success btn-block"
            >
              Submit Test 1
            </button>
          </form>
        </div>
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
          <form action="#" method="POST" id="registration-form">
            <div className="form-group">
              {/* <label htmlFor="username-register" className="text-muted mb-1">
                <small>Username</small>
              </label> */}
              <input
                name="test2_data1"
                id="test2_data1"
                className="form-control"
                type="text"
                placeholder="Test 2 Data 1"
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              {/* <label htmlFor="email-register" className="text-muted mb-1">
                <small>Email</small>
              </label> */}
              <input
                name="test2_data2"
                id="test2_data2"
                className="form-control"
                type="text"
                placeholder="Test 2 Data 2"
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              {/* <label htmlFor="password-register" className="text-muted mb-1">
                <small>Password</small>
              </label> */}
              <input
                name="test2_data3"
                id="test2_data3"
                className="form-control"
                type="text"
                placeholder="Test 2 Data 3"
              />
            </div>

            <button
              type="submit"
              className="py-3 mt-4 btn btn-lg btn-success btn-block"
            >
              Submit Test 2
            </button>
          </form>
        </div>
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
          <form action="#" method="POST" id="registration-form">
            <div className="form-group">
              {/* <label htmlFor="username-register" className="text-muted mb-1">
                <small>Username</small>
              </label> */}
              <input
                name="test3_data1"
                id="test3_data1"
                className="form-control"
                type="text"
                placeholder="Test 3 Data 1"
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              {/* <label htmlFor="email-register" className="text-muted mb-1">
                <small>Email</small>
              </label> */}
              <input
                name="test3_data2"
                id="test3_data2"
                className="form-control"
                type="text"
                placeholder="Test 3 Data 2"
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              {/* <label htmlFor="password-register" className="text-muted mb-1">
                <small>Password</small>
              </label> */}
              <input
                name="test3_data3"
                id="test3_data3"
                className="form-control"
                type="text"
                placeholder="Test 3 Data 3"
              />
            </div>

            <button
              type="submit"
              className="py-3 mt-4 btn btn-lg btn-success btn-block"
            >
              Submit Test 3
            </button>
          </form>
        </div>
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
          <form action="#" method="POST" id="registration-form">
            <div className="form-group">
              {/* <label htmlFor="username-register" className="text-muted mb-1">
                <small>Username</small>
              </label> */}
              <input
                name="test4_data1"
                id="test4_data1"
                className="form-control"
                type="text"
                placeholder="Test 4 Data 1"
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              {/* <label htmlFor="email-register" className="text-muted mb-1">
                <small>Email</small>
              </label> */}
              <input
                name="test4_data2"
                id="test4_data2"
                className="form-control"
                type="text"
                placeholder="Test 4 Data 2"
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              {/* <label htmlFor="password-register" className="text-muted mb-1">
                <small>Password</small>
              </label> */}
              <input
                name="test4_data3"
                id="test4_data3"
                className="form-control"
                type="text"
                placeholder="Test 4 Data 3"
              />
            </div>

            <button
              type="submit"
              className="py-3 mt-4 btn btn-lg btn-success btn-block"
            >
              Submit Test 4
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Main;
