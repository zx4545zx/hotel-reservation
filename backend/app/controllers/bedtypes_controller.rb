class BedtypesController < ApplicationController
  before_action :set_bedtype, only: %i[ show update destroy ]

  # GET /bedtypes
  def index
    @bedtypes = Bedtype.all

    render json: @bedtypes
  end

  # GET /bedtypes/1
  def show
    render json: @bedtype
  end

  # POST /bedtypes
  def create
    @bedtype = Bedtype.new(bedtype_params)

    if @bedtype.save
      render json: @bedtype, status: :created, location: @bedtype
    else
      render json: @bedtype.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /bedtypes/1
  def update
    if @bedtype.update(bedtype_params)
      render json: @bedtype
    else
      render json: @bedtype.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bedtypes/1
  def destroy
    @bedtype.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bedtype
      @bedtype = Bedtype.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def bedtype_params
      params.require(:bedtype).permit(:name, :size)
    end
end
