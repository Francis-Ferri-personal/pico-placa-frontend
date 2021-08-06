import useForm from "../hooks/useForm";
import { PicoPlacaData } from "../types/picoPlaca";
import { useState } from "react";

import Swal from "sweetalert2";
import { checkPicoPlaca, validateForm } from "../helpers/checkPicoPlaca";

const PicoPlacaForm = () => {
	const { plateNumber, date, time, handleChange, form } =
		useForm<PicoPlacaData>({
			plateNumber: "",
			date: "",
			time: ""
		});

	const [validations, setValidations] = useState({
		plateVal: true,
		dateVal: true,
		timeVal: true
	});
	const { plateVal, dateVal, timeVal } = validations;

	const [loading, setLoading] = useState(false);

	const handleSubmit = () => {
		setLoading(true);
		const { plateVal, dateVal, timeVal } = validateForm(form);
		setValidations({ plateVal, dateVal, timeVal });

		if (!(plateVal && dateVal && timeVal)) {
			setLoading(false);
			return;
		}
		checkPicoPlaca(form)
			.then((allowed) => {
				console.log(allowed);
				if (allowed) {
					Swal.fire(
						"No Pico & Placa",
						"You can drive your car at that time!",
						"success"
					);
				} else {
					Swal.fire(
						"Pico & Placa",
						"You can't drive your car at that time!",
						"info"
					);
				}
			})
			.catch((error) => {
				Swal.fire("Error", "" + error, "error");
			});

		setLoading(false);
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
									className={`form-control ${!plateVal && "is-invalid"}`}
									name="plateNumber"
									value={plateNumber}
									onChange={handleChange}
									placeholder="Write your plate number"
								/>
								<div className="invalid-feedback">
									Please provide a valid License plate number.
								</div>
								{/* is-invalid */}
							</div>
						</div>
						<div className="form-group row">
							<label className="col-md-4 col-lg-4 col-form-label">Date</label>
							<div className="col-sm-8 col-lg-8">
								<input
									type="date"
									name="date"
									value={date}
									onChange={handleChange}
									className={`form-control ${!dateVal && "is-invalid"}`}
								/>
								<div className="invalid-feedback">
									Please provide a valid date.
								</div>
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
									className={`form-control ${!timeVal && "is-invalid"}`}
								/>
								<div className="invalid-feedback">
									Please provide a valid time.
								</div>
							</div>
						</div>

						<div className="d-grid">
							<button
								className="btn btn-success"
								type="button"
								onClick={handleSubmit}
								disabled={loading}
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
