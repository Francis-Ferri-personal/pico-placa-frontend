const PicoPlacaForm = () => {
	return (
		<div className="container p-5">
			<div className="row">
				<div className="col-md-6">
					<h2 className="text-center">Information</h2>
					<form action="">
						<div className="form-group row">
							<label className="col-md-4 col-lg-4 col-form-label">
								License plate number
							</label>
							<div className="col-sm-8 col-lg-8">
								<input
									type="text"
									id="plate-number"
									className="form-control"
									placeholder="Write your plate number"
									// required
								/>
							</div>
						</div>
						<div className="form-group row ">
							<label className="col-md-4 col-lg-4 col-form-label">Date</label>
							<div className="col-sm-8 col-lg-8">
								<input type="date" name="" id="date" className="form-control" />
							</div>
						</div>
						<div className="form-group row">
							<label className="col-md-4 col-lg-4 col-form-label">Time</label>
							<div className="col-sm-8 col-lg-8">
								<input type="time" id="time" className="form-control" />
							</div>
						</div>
						<div className="d-grid">
							<button className="btn btn-success" type="button">
								Check pico & placa
							</button>
						</div>
					</form>
				</div>
				<div className="col-md-6">
					<img className="image my-3" src="./assets/pico-placa.jpg" alt="" />
				</div>
			</div>
		</div>
	);
};

export default PicoPlacaForm;
