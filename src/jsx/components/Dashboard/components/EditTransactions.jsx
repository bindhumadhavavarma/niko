import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { ScaleLoader } from 'react-spinners'
import { AxiosPost } from '../../../../context/UserContext';
import { pushNotify } from '../../../../services/NotifyService';
import { convertNumberToWords } from '../../../../context/UserContext';
import Select from "react-select";

function EditTransactions(props) {
    const [isLoading, setIsLoading] = useState(false)
    const tempData = props.showEditForm.data.transaction_info[0]
    const initialFormData = {
        sl: props.transaction.sl,
        qty: props.transaction.qty, total: props.transaction.total,
        app_name: props.transaction.app_name,
        customer: {
            label: props.transaction.company_name, value: props.transaction.customer, address: props.transaction.address,
            address2: props.transaction.address2, address3: props.transaction.address3, address4: props.transaction.address4,
            address5: props.transaction.address5, subject_address: props.transaction.subject_address,
        },
        address: props.transaction.address, address2: props.transaction.address2, address3: props.transaction.address3, address4: props.transaction.address4,
        address5: props.transaction.address5, subject_address: props.transaction.subject_address,
        invoice_date: props.transaction.invoice_date, mail_received_date: props.transaction.mail_received_date,
        sales_tax: props.transaction.sales_tax, sales_tax_amount: props.transaction.sales_tax_amount, gross_amount: props.transaction.gross_amount,
        payment_status: props.transaction.payment_status, remarks: props.transaction.remarks,
        app_type: props.transaction.app_type, category: props.transaction.category,
        received_amount: props.transaction.received_amount,
        cfms_id: props.transaction.cfms_id, certificate_issued_date: props.transaction.certificate_issued_date
        , certificate_expiry_date: props.transaction.certificate_expiry_date, apts_receipt_no: props.transaction.apts_receipt_no,
        apts_receipt_date: props.transaction.apts_receipt_date, gov: props.transaction.gov
    }
    const [formData, setFormData] = useState(initialFormData)
    const [isLoading2, setIsLoading2] = useState(false)
    const [companyOptions, setCompanyOptions] = useState([])

    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const editTransaction = async () => {
        try {
            setIsLoading(true);
            const data = await AxiosPost('edit_transaction.php', formData);
            if (data.success) {
                pushNotify("success", "Success", "Trnsaction Updated and approved successfully.")
                props.setShowInfo({ show: false, id: null })
            }
            else {
                pushNotify("error", "Error", data.error)
            }
        } catch {
            pushNotify("error", "Error", "Server Error!")
        } finally {

        }
    }

    function getNumber(value) {
        const num = parseInt(value);
        return isNaN(num) ? 0 : num;
    }

    useEffect(() => {
        setFormData({ ...formData, "gross_amount": getNumber(formData.total) + (getNumber(formData.total) * getNumber(formData.sales_tax) / 100) })
    }, [formData.total, formData.sales_tax])

    const fetchCompanies = async () => {
        try {
            setIsLoading2(true);
            const data = await AxiosPost('fetch_company_options.php');
            if (data.success) {
                setCompanyOptions(data.options)
            }
            else {
                pushNotify("error", "Error", data.error)
            }
        } catch {
            pushNotify("error", "Error", "Server Error!")
        } finally {
            setIsLoading2(false)
        }
    }

    useEffect(() => {
        fetchCompanies()
    }, [])

    useEffect(() => {
        setFormData({
            ...formData, address: formData.customer.address, address2: formData.customer.address2, address3: formData.customer.address3,
            address4: formData.customer.address4, address5: formData.customer.address5, subject_address: formData.customer.subject_address
        })
    }, [formData.customer])

    useEffect(() => {
        setFormData({
            ...formData, "gross_amount": getNumber(formData.total) + (getNumber(formData.total) * getNumber(formData.sales_tax) / 100),
            "sales_tax_amount": (getNumber(formData.total) * getNumber(formData.sales_tax) / 100)
        })
    }, [formData.total, formData.sales_tax])

    return (
        <div>
            <div className="col-xl-12 col-lg-12 col-xxl-12 col-sm-12">
                <div className="card">
                    <div className="card-header border-0 pb-0" style={{ justifyContent: "left" }}>
                        <button className="btn btn-primary tp-btn sharp" onClick={() => { props.setShowInfo({ show: false, id: null }) }} ><i className="fas fa-arrow-left"></i></button>
                        <h4 className="card-title">Transaction Info</h4>
                    </div>
                    <div className="card-body" style={{ height: "calc(100vh - 18.5rem)" }}>
                        <div className="table-responsive recentOrderTable" style={{ height: "100%" }}>
                            {
                                isLoading || isLoading2 == null ?
                                    <div className="row mx-0" style={{ height: "100%" }}><ScaleLoader cssOverride={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }} /></div> :
                                    <form className='basic-form' onSubmit={(e) => editTransaction(e)}>
                                        <div className='row' style={{ margin: "0" }}>
                                            <div className='col-md-6'>
                                                <label>App Name <span className='text-danger'>*</span></label>
                                                <input type="text" required className='form-control' name='app_name' value={formData.app_name} onChange={onChangeHandler} />
                                            </div>
                                            <div className='col-md-6'>
                                                <label>App Type <span className='text-danger'>*</span></label>
                                                <select className='form-control' name="app_type" value={formData.app_type} onChange={onChangeHandler} required>
                                                    <option value="web">Web</option>
                                                    <option value="mobile">Mobile</option>
                                                    <option value="Network">Network</option>
                                                </select>
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Category <span className='text-danger'>*</span></label>
                                                <input type="text" required className='form-control' name='category' value={formData.category} onChange={onChangeHandler} />
                                            </div>
                                            <div className='col-md-6'>
                                                <label>AP Government <span className='text-danger'>*</span></label>
                                                <select className='form-control' name="gov" value={formData.gov} onChange={onChangeHandler} required>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Organisation <span className='text-danger'>*</span></label>
                                                <Select
                                                    isLoading={isLoading2}
                                                    isDisabled={isLoading2}
                                                    value={formData.customer}
                                                    onChange={(e) => { setFormData({ ...formData, "customer": e }) }}
                                                    options={companyOptions}
                                                />
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Address Line 1 (Designation) </label>
                                                <input type="text" className='form-control' name='address' value={formData.address} onChange={onChangeHandler} readOnly />
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Address Line 2 </label>
                                                <input type="text" className='form-control' name='address' value={formData.address2} onChange={onChangeHandler} readOnly />
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Address Line 3 </label>
                                                <input type="text" className='form-control' name='address' value={formData.address3} onChange={onChangeHandler} readOnly />
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Address Line 4 </label>
                                                <input type="text" className='form-control' name='address' value={formData.address4} onChange={onChangeHandler} readOnly />
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Address Line 5 </label>
                                                <input type="text" className='form-control' name='address' value={formData.address5} onChange={onChangeHandler} readOnly />
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Subject Address </label>
                                                <input type="text" className='form-control' name='subject_address' value={formData.subject_address} onChange={onChangeHandler} readOnly />
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Quantity </label>
                                                <input type="number" className='form-control' value={formData.qty} name="qty" onChange={onChangeHandler} />
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Total <span className='text-danger'>*</span></label>
                                                <input required type="number" className='form-control' value={formData.total} name="total" onChange={onChangeHandler} />
                                                <span className='text-success'>{convertNumberToWords(formData.total)}</span>
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Invoice Date <span className='text-danger'>*</span></label>
                                                <input type="date" required className='form-control' name='invoice_date' value={formData.invoice_date} onChange={onChangeHandler} />
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Mail Received Date <span className='text-danger'>*</span></label>
                                                <input type="date" required className='form-control' name='mail_received_date' value={formData.mail_received_date} onChange={onChangeHandler} />
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Sales Tax (Percentage) <span className='text-danger'>*</span></label>
                                                <input type="number" required className='form-control' name='sales_tax' value={formData.sales_tax} onChange={onChangeHandler} />
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Gross Amount<span className='text-danger'>*</span></label>
                                                <input type="number" readOnly className='form-control' name='gross_amount' value={formData.gross_amount} onChange={onChangeHandler} />
                                                <span className='text-success'>{convertNumberToWords(formData.gross_amount)}</span>
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Payment Status <span className='text-danger'>*</span></label>
                                                <select className='form-control' required name="payment_status" onChange={onChangeHandler} value={formData.payment_status}>
                                                    <option value="Unpaid">Unpaid</option>
                                                    <option value="Paid">Paid</option>
                                                </select>
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Amount Revceived</label>
                                                <input type="number" className='form-control' name='received_amount' value={formData.received_amount} onChange={onChangeHandler} />
                                                <span className='text-success'>{convertNumberToWords(formData.received_amount)}</span>
                                            </div>
                                            <div className='col-md-6'>
                                                <label>CFMS Id</label>
                                                <input type="text" className='form-control' name='cfms_id' value={formData.cfms_id} onChange={onChangeHandler} />
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Certificate Issued Date</label>
                                                <input type="date" className='form-control' name='certificate_issued_date' value={formData.certificate_issued_date} onChange={onChangeHandler} />
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Certificate Expired Date</label>
                                                <input type="date" className='form-control' name='certificate_expiry_date' value={formData.certificate_expiry_date} onChange={onChangeHandler} />
                                            </div>
                                            <div className='col-md-6'>
                                                <label>APTS Receipt Number</label>
                                                <input type="text" className='form-control' name='apts_receipt_no' value={formData.apts_receipt_no} onChange={onChangeHandler} />
                                            </div>
                                            <div className='col-md-6'>
                                                <label>APTS Receipt Date</label>
                                                <input type="date" className='form-control' name='apts_receipt_date' value={formData.apts_receipt_date} onChange={onChangeHandler} />
                                            </div>
                                            <div className='col-md-6'>
                                                <label>Remarks </label>
                                                <input type="text" className='form-control' name='remarks' value={formData.remarks} onChange={onChangeHandler} />
                                            </div>
                                            <div className='mt-3'>
                                                <button className='btn btn-primary' type='submit'>Edit Transaction</button>
                                            </div>
                                        </div>
                                    </form>

                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EditTransactions