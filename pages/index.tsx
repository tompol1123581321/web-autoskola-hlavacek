import Head from "next/head"
import Link from "next/link"
import { Col, Row } from "react-bootstrap"

export default function Home() {
	return (
		<div>
			<Head>
				<title>Autoškola Hlaváček Vlašim</title>
				<meta name="description" content="Autoškola Hlaváček ve Vlašimi nabízí lekce auto a moto" />
			</Head>
			<header>
				<Row>
					<Col>
						<Link href="/other/page1">
							<a>this page</a>
						</Link>
					</Col>
				</Row>
			</header>
		</div>
	)
}
