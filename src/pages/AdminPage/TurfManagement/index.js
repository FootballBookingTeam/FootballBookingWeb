// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function TurfManagement() {
    var sectionStyle = {
        width: "100%",
        minHeight: "200px",
        objectFit:"contain",
        backgroundImage: "url(https://www.sporta.vn/assets/default_venue_2-fc9cf297fbd4f7ab5cd72bbf90e66f293d689007ee1aaa1994366e8f0913d8e5.jpg )"
      };
    return (
        <div className="container-fluid py-5 px-lg-5">
            <div className="row">
                <div className="col">
                    <div className="d-flex justify-content-between align-items-center flex-column flex-md-row mb-5">
                        <div className="mr-3">
                            <h4 className="mb-md-0">
                                Sân bóng đá mini ở{' '}
                                <span className="badge badge-pill badge-info search-string-tag"> Quận 1, Tp Hồ Chí Minh</span>
                            </h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 col-xl-3 mb-5">
                            <div className="card h-100 border-0 shadow">
                                <div
                                    style={ sectionStyle }
                                    className="card-img-top overflow-hidden dark-overlay bg-cover"
                                >
                                    <a href="/san-cung-van-hoa-lao-dong" className="tile-link"></a>
                                    <div className="card-img-overlay-bottom z-index-20">
                                        <h5 className="orange-text text-shadow">Sân cung văn hoá lao động </h5>

                                    </div>
                                </div>
                                <div className="card-body">
                                    <p className="text-sm text-muted mb-3"></p>
                                    <p className="text-sm text-muted text-uppercase mb-1">
                                        <a href="#" className="text-dark">
                                            6 Huyền Trân Công Chúa, Quận 1
                                        </a>
                                    </p>
                                    <p className="text-sm mb-0">
                                        <a href="/san-bong/tp-ho-chi-minh/quan-1" className="mr-1">
                                            Quận 1,
                                        </a>
                                        <a href="/san-bong/tp-ho-chi-minh" className="mr-1">
                                            Tp Hồ Chí Minh
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TurfManagement;
