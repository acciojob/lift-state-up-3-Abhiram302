export default function Child2({ setOption, update }) {
  return (
    <div style={{ backgroundColor: "yellow", padding: "5px" }}>
      <h3>Child component 2</h3>
      <button
        onClick={() => {
          update("Option 2");
        }}
      >
        Option 2
      </button>
    </div>
  );
}