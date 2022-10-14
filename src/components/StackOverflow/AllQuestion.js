import "./allquestion.css";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

function AllQuestions({ data }) {
  return (
    <>
      <div className="all-questions">
        <div className="all-questions-container">
          <div className="all-questions-left">
            <div className="all-options">
              <div className="all-option">
                <p>0</p>
                <span>votes</span>
              </div>
              <div className="all-option">
                <p>0</p>
                <span>answers</span>
              </div>
              <div className="all-option">
                <small>2 views</small>
              </div>
            </div>
          </div>
          <div className="question-answer">
            <Link to="/">Deployment issue with micros</Link>
            <div style={{ maxWidth: "90%" }}>
              <div>
              Two things to note... first is have a look at the Caveats section of the RedisX docs.And secondly:
Unhandled error event: Error: getaddrinfo ENOTFOUND redis
That means it's falling back to your default redis value instead of using process.env.REDISX_CACHE_HOST, which means that it's not finding the environment variable.
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <span
                className="question-tags"
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {" "}
                react
              </span>
              <span
                className="question-tags"
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {" "}
                frontend
              </span>
              <span
                className="question-tags"
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {" "}
                javascript
              </span>
            </div>
            <div className="author">
              <small>answered 47 sec ago</small>
              <div className="auth-details">
                <CgProfile style={{ fontSize: "30px", color: "gray" }} />
                <p>
                  James
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="all-questions">
        <div className="all-questions-container">
          <div className="all-questions-left">
            <div className="all-options">
              <div className="all-option">
                <p>0</p>
                <span>votes</span>
              </div>
              <div className="all-option">
                <p>0</p>
                <span>answers</span>
              </div>
              <div className="all-option">
                <small>2 views</small>
              </div>
            </div>
          </div>
          <div className="question-answer">
            <Link to="/">what is the capital of US?</Link>
            <div style={{ maxWidth: "90%" }}>
              <div>
              CApital of uS is asfs..
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <span
                className="question-tags"
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {" "}
                react
              </span>
              <span
                className="question-tags"
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {" "}
                frontend
              </span>
              <span
                className="question-tags"
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {" "}
                javascript
              </span>
            </div>
            <div className="author">
              <small>answered 47 sec ago</small>
              <div className="auth-details">
                <CgProfile style={{ fontSize: "30px", color: "gray" }} />
                <p>
                  James
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="all-questions">
        <div className="all-questions-container">
          <div className="all-questions-left">
            <div className="all-options">
              <div className="all-option">
                <p>0</p>
                <span>votes</span>
              </div>
              <div className="all-option">
                <p>0</p>
                <span>answers</span>
              </div>
              <div className="all-option">
                <small>2 views</small>
              </div>
            </div>
          </div>
          <div className="question-answer">
            <Link to="/">This is question title</Link>
            <div style={{ maxWidth: "90%" }}>
              <div>
              I wanted to send a pr to merge in hacktoberfest. please tell me how can I do this?
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <span
                className="question-tags"
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {" "}
                react
              </span>
              <span
                className="question-tags"
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {" "}
                frontend
              </span>
              <span
                className="question-tags"
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {" "}
                javascript
              </span>
            </div>
            <div className="author">
              <small>answered 47 sec ago</small>
              <div className="auth-details">
                <CgProfile style={{ fontSize: "30px", color: "gray" }} />
                <p>
                  James
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="all-questions">
        <div className="all-questions-container">
          <div className="all-questions-left">
            <div className="all-options">
              <div className="all-option">
                <p>0</p>
                <span>votes</span>
              </div>
              <div className="all-option">
                <p>0</p>
                <span>answers</span>
              </div>
              <div className="all-option">
                <small>2 views</small>
              </div>
            </div>
          </div>
          <div className="question-answer">
            <Link to="/">This is question title</Link>
            <div style={{ maxWidth: "90%" }}>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae reiciendis, adipisci pariatur consequuntur culpa
                dolor nam est nisi labore nemo repellendus nostrum, deleniti
                voluptas eveniet cumque rem, sit iste facere.
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <span
                className="question-tags"
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {" "}
                react
              </span>
              <span
                className="question-tags"
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {" "}
                frontend
              </span>
              <span
                className="question-tags"
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {" "}
                javascript
              </span>
            </div>
            <div className="author">
              <small>answered 47 sec ago</small>
              <div className="auth-details">
                <CgProfile style={{ fontSize: "30px", color: "gray" }} />
                <p>
                  James
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="all-questions">
        <div className="all-questions-container">
          <div className="all-questions-left">
            <div className="all-options">
              <div className="all-option">
                <p>0</p>
                <span>votes</span>
              </div>
              <div className="all-option">
                <p>0</p>
                <span>answers</span>
              </div>
              <div className="all-option">
                <small>2 views</small>
              </div>
            </div>
          </div>
          <div className="question-answer">
            <Link to="/">Redis connection issue for Forge apps</Link>
            <div style={{ maxWidth: "90%" }}>
              <div>
Two things to note... first is have a look at the Caveats section of the RedisX docs.And secondly:
Unhandled error event: Error: getaddrinfo ENOTFOUND redis
That means it's falling back to your default redis value instead of using process.env.REDISX_CACHE_HOST, which means that it's not finding the environment variable.
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <span
                className="question-tags"
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {" "}
                react
              </span>
              <span
                className="question-tags"
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {" "}
                frontend
              </span>
              <span
                className="question-tags"
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {" "}
                javascript
              </span>
            </div>
            <div className="author">
              <small>answered 47 sec ago</small>
              <div className="auth-details">
                <CgProfile style={{ fontSize: "30px", color: "gray" }} />
                <p>
                  James
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="all-questions">
        <div className="all-questions-container">
          <div className="all-questions-left">
            <div className="all-options">
              <div className="all-option">
                <p>0</p>
                <span>votes</span>
              </div>
              <div className="all-option">
                <p>0</p>
                <span>answers</span>
              </div>
              <div className="all-option">
                <small>2 views</small>
              </div>
            </div>
          </div>
          <div className="question-answer">
            <Link to="/">This is question title</Link>
            <div style={{ maxWidth: "90%" }}>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae reiciendis, adipisci pariatur consequuntur culpa
                dolor nam est nisi labore nemo repellendus nostrum, deleniti
                voluptas eveniet cumque rem, sit iste facere.
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <span
                className="question-tags"
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {" "}
                react
              </span>
              <span
                className="question-tags"
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {" "}
                frontend
              </span>
              <span
                className="question-tags"
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {" "}
                javascript
              </span>
            </div>
            <div className="author">
              <small>answered 47 sec ago</small>
              <div className="auth-details">
                <CgProfile style={{ fontSize: "30px", color: "gray" }} />
                <p>
                  James
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllQuestions;
