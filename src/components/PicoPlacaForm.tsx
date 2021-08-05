import useForm from "../hooks/useForm";

interface FormData {
	plateNumber: string;
	date: any;
	time: any;
}

const PicoPlacaForm = () => {
	const { plateNumber, date, time, handleChange, form } = useForm<FormData>({
		plateNumber: "",
		date: "",
		time: ""
	});

	const handleSubmit = () => {
		alert("se dio click");
	};

	return (
		<div className="container p-5">
			<div className="row">
				<div className="col-md-6">
					<h2 className="text-center">Information</h2>
					<form autoComplete="off">
						<div className="form-group row">
							<label className="col-md-4 col-lg-4 col-form-label">
								License plate number
							</label>
							<div className="col-sm-8 col-lg-8">
								<input
									type="text"
									className="form-control"
									name="plateNumber"
									value={plateNumber}
									onChange={handleChange}
									placeholder="Write your plate number"
								/>
							</div>
						</div>
						<div className="form-group row ">
							<label className="col-md-4 col-lg-4 col-form-label">Date</label>
							<div className="col-sm-8 col-lg-8">
								<input
									type="date"
									name="date"
									value={date}
									onChange={handleChange}
									className="form-control"
								/>
							</div>
						</div>
						<div className="form-group row">
							<label className="col-md-4 col-lg-4 col-form-label">Time</label>
							<div className="col-sm-8 col-lg-8">
								<input
									type="time"
									name="time"
									value={time}
									onChange={handleChange}
									className="form-control"
								/>
							</div>
						</div>

						<div className="d-grid">
							<button
								className="btn btn-success"
								type="button"
								onClick={handleSubmit}
							>
								Check pico & placa
							</button>
						</div>
					</form>
				</div>

				{/* Decorative Image */}
				<div className="col-md-6">
					<img className="image my-3" src="./assets/pico-placa.jpg" alt="" />
				</div>
			</div>
		</div>
	);
};

export default PicoPlacaForm;
