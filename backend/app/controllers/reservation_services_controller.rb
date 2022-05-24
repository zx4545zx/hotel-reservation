class ReservationServicesController < ApplicationController
  before_action :set_reservation_service, only: %i[ show update destroy ]

  # GET /reservation_services
  def index
    @reservation_services = ReservationService.all

    render json: @reservation_services
  end

  # GET /reservation_services/1
  def show
    render json: @reservation_service
  end

  # POST /reservation_services
  def create
    @reservation_service = ReservationService.new(reservation_service_params)

    if @reservation_service.save
      render json: @reservation_service, status: :created, location: @reservation_service
    else
      render json: @reservation_service.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reservation_services/1
  def update
    if @reservation_service.update(reservation_service_params)
      render json: @reservation_service
    else
      render json: @reservation_service.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reservation_services/1
  def destroy
    @reservation_service.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reservation_service
      @reservation_service = ReservationService.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def reservation_service_params
      params.require(:reservation_service).permit(:reservation_id, :service_id, :amount)
    end
end
