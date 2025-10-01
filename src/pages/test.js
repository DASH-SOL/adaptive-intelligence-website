// File: src/pages/test.js

const TestPage = ({ message }) => {
  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif', fontSize: '2rem' }}>
      <h1>Test Page</h1>
      <p>This is a test to see if getStaticProps is working.</p>
      <hr />
      <p>Message from server: <strong>{message}</strong></p>
    </div>
  );
};

export async function getStaticProps() {
  // This is the message we are looking for in the terminal
  console.log("\n\n--- 🚀 GETSTATICPROPS IS RUNNING ON THE /test PAGE ---\n\n");

  return {
    props: {
      message: "Success! The function ran.",
    },
  };
}

export default TestPage;