class ServiceroomsController < ApplicationController
  before_action :set_serviceroom, only: %i[ show update destroy ]

  # GET /servicerooms
  def index
    @servicerooms = Serviceroom.all

    render json: @servicerooms
  end

  # GET /servicerooms/1
  def show
    render json: @serviceroom
  end

  # POST /servicerooms
  def create
    @serviceroom = Serviceroom.new(serviceroom_params)

    if @serviceroom.save
      render json: @serviceroom, status: :created, location: @serviceroom
    else
      render json: @serviceroom.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /servicerooms/1
  def update
    if @serviceroom.update(serviceroom_params)
      render json: @serviceroom
    else
      render json: @serviceroom.errors, status: :unprocessable_entity
    end
  end

  # DELETE /servicerooms/1
  def destroy
    @serviceroom.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_serviceroom
      @serviceroom = Serviceroom.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def serviceroom_params
      params.require(:serviceroom).permit(:name)
    end
end
