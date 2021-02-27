<Stepper steps={steps} initialStep="bookingInformation">
  {(prevStep, nextStep, CurrentStep, steps) => {
    // menggunakna react fragment supaya kembalian render 1 aja
    <>
      <Numbering
        data={steps}
        current={CurrentStep}
        style={{ marginBottom: 50 }}
      />

      <Meta data={steps} current={CurrentStep} />
      <MainContent data={steps} current={CurrentStep} />

      {/* data yang akan ditampilkan sesuai dengan step */}
      {CurrentStep === "bookingInformation" && (
        <Controller>
          {data.firstName !== "" &&
            data.lastName !== "" &&
            data.email !== "" &&
            data.phone !== "" && (
              <Fade>
                <Button
                  className="btn mb-3"
                  type="button"
                  isBlock
                  isPrimary
                  hasShadow
                  onClick={nextStep}
                >
                  Continue to Book
                </Button>
              </Fade>
            )}
          <Button
            className="btn"
            type="link"
            isBlock
            isLight
            href={`/properties/${ItemDetails._id}`}
          >
            Cancel
          </Button>
        </Controller>
      )}

      {CurrentStep === "payment" && (
        <Controller>
          {data.proofPayment !== "" &&
            data.bankName !== "" &&
            data.bankHolder !== "" && (
              <Fade>
                <Button
                  className="btn mb-3"
                  type="button"
                  isBlock
                  isPrimary
                  hasShadow
                  onClick={nextStep}
                >
                  Continue to Book
                </Button>
              </Fade>
            )}

          <Button
            className="btn"
            type="button"
            isBlock
            isLight
            onClick={prevStep}
          >
            Cancel
          </Button>
        </Controller>
      )}

      {CurrentStep === "completed" && (
        <Controller>
          <Button
            className="btn"
            type="link"
            isBlock
            isPrimary
            hasShadow
            href=""
          >
            Back to Home
          </Button>
        </Controller>
      )}
    </>;
  }}
</Stepper>;
