function Historique() {
    return (
        <>
            <h2 className="text-white mt-4 mx-2 mx-lg-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
                liste des Historiques
            </h2>

            <div className="mb-5 mt-4">
                <div className="card bg-dark mt-2 mt-lg-3 rounded-0 mx-2 px-2 mx-lg-4 " style={{ border: "red solid 2px" }}>
                    <h3 className="text-secondary mt-1 mt-lg-2 ms-2 ms-lg-3 gap-2 gap-md-3" style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                        Dépôt
                    </h3>

                    <div className="d-flex justify-content-between">
                        <h3 className="text-secondary mt-1 mt-lg-2 ms-2 ms-lg-3 gap-2 gap-md-3" style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                            15 juin 2026 · 14:02
                        </h3>
                        <h3 className="text-success mt-1 mt-lg-2 ms-2 ms-lg-3 gap-2 gap-md-3" style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                            + 500 000 Ar
                        </h3>
                    </div>

                </div>

                <div className="card bg-dark mt-2 mt-lg-3 rounded-0 mx-2 px-2 mx-lg-4 " style={{ border: "red solid 2px" }}>
                    <h3 className="text-secondary mt-1 mt-lg-2 ms-2 ms-lg-3 gap-2 gap-md-3" style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                        Virement
                    </h3>

                    <div className="d-flex justify-content-between">
                        <h3 className="text-secondary mt-1 mt-lg-2 ms-2 ms-lg-3 gap-2 gap-md-3" style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                            15 juin 2026 · 14:02
                        </h3>
                        <h3 className="text-danger mt-1 mt-lg-2 ms-2 ms-lg-3 gap-2 gap-md-3" style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                            + 500 000 Ar
                        </h3>
                    </div>

                </div>

                <div className="card bg-dark mt-2 mt-lg-3 rounded-0 mx-2 px-2 mx-lg-4 " style={{ border: "red solid 2px" }}>
                    <h3 className="text-secondary mt-1 mt-lg-2 ms-2 ms-lg-3 gap-2 gap-md-3" style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                        Intérêt mensuel
                    </h3>

                    <div className="d-flex justify-content-between">
                        <h3 className="text-secondary mt-1 mt-lg-2 ms-2 ms-lg-3 gap-2 gap-md-3" style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                            15 juin 2026 · 14:02
                        </h3>
                        <h3 className="text-success mt-1 mt-lg-2 ms-2 ms-lg-3 gap-2 gap-md-3" style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                            + 250 Ar
                        </h3>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Historique;