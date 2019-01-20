declare global {
    namespace JSX {
        interface IntrinsicElements {
            'figure':  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            'figcaption': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
        }
    }
}
