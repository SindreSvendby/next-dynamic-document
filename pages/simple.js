import Link from "next/link";

export default props => (
  <html>
    <body>
      <p>Simple site {JSON.stringify(props.query)}</p>
    </body>
  </html>
);
