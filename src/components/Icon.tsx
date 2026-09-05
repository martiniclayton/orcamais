import { faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Mobile{
    tela: boolean,
    empresa: string,
    desc: string
}

export const Icon = (tela: Mobile ) => {
    return (
        <>  
            <div id={tela.tela === false ? "desktop" : "mobile"} className={`iconLogo d-flex gap-2 align-items-center`}>
                <div><FontAwesomeIcon icon={faGear} /></div>
                <div className="icon">
                    <span>{tela.empresa}</span>
                    <p>{tela.desc}</p>
                </div>
            </div>
        </>
    )
}