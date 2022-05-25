class QuotationsController < ApplicationController
  before_action :set_quotation, only: %i[ show update destroy ]

  # GET /quotations
  def index
    @quotations = Quotation.all

    render json: @quotations, include: [ :reservation ]
  end

  # GET /quotations/1
  def show
    render json: @quotation, include: [ :reservation ]
  end

  # POST /quotations
  def create
    @quotation = Quotation.new(quotation_params)

    if @quotation.save
      render json: @quotation, status: :created, location: @quotation
    else
      render json: @quotation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /quotations/1
  def update
    if @quotation.update(quotation_params)
      render json: @quotation
    else
      render json: @quotation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /quotations/1
  def destroy
    @quotation.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_quotation
      @quotation = Quotation.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def quotation_params
      params.require(:quotation).permit(:butget, :status)
    end
end
