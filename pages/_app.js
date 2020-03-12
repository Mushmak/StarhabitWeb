import '@material/button/dist/mdc.button.css';
import '@material/list/dist/mdc.list.css';
import Link from 'next/link'
import { Button } from '@rmwc/button'
import '../styles.css'
import '@rmwc/icon/icon.css';
import '@material/image-list/dist/mdc.image-list.css';


function myApp({ Component, pageProps }) {
    return (
        <>

            <h1 id="greeting"> GREET THE STARS</h1>



            <div id="Header">
                <Button >
                    <Link href="/gallery">
                        <p> gallery</p>
                    </Link>
                </Button>

                <Button >
                    <Link href="/examples">
                        <p id="links"> examples</p>
                    </Link>
                </Button>

                <Button >
                    <Link href="/commissions">
                        <p id="links"> commissions</p>
                    </Link>
                </Button>
                <Button>
                    <Link href="/contact">
                        <p id="links"> contact</p>
                    </Link>
                </Button>
            </div>

            <div id="content">
                <Component {...pageProps}></Component>
            </div>



        </>



    )
}
export default myApp