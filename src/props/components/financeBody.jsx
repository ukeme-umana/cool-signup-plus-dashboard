import React from "react";

function FinanceBody() {
  return (
    <div>
      <div className="thr-fn-bx">
        <div className="fn-bx">
          <p className="gr-txt">Paid Commitment Fee</p>
          <span className="sp-big-txt">56730</span>
        </div>
        <div className="fn-bx">
          <p className="gr-txt">Equity/Loan Disbursed</p>
          <span className="sp-big-txt">76730</span>
        </div>
        <div className="fn-bx">
          <p className="gr-txt">Total Repayment</p>
          <span className="sp-big-txt">2830</span>
        </div>
      </div>
      <div className="sp-2-line-div">
        <span className="lg-gy-txt lg-gy-txt-end">Commitment Fee</span>
        <span className="lg-gy-txt">Equity/Loan Disbursed</span>
        <span className="lg-gy-txt">Total Repayment</span>
      </div>
    </div>
  );
}

export default FinanceBody;
