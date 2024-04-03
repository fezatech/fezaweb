import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Office" invert={invert}>
          Beşyol Mah. İnönü Cd. No: 38 D Blok
          <br />
          34295 Küçükçekmece / İSTANBUL
        </Office>
      </li>
      <li>
        <Office name="Contact" invert={invert}>
          <span className="bold">Phone: </span> +90 545 464 4546
          <br />
          <span className="bold">Mail: </span> fezatech.tr@gmail.com
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
