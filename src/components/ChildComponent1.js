export default function Child1({ setOption, update }) {
  return (
    <div style={{ backgroundColor: "brown", padding: "5px" }}>
      <h3>Child component 1</h3>
      <button
        onClick={() => {
          update("Option 1");
        }}
      >
        Option 1
      </button>
    </div>
  );
}
