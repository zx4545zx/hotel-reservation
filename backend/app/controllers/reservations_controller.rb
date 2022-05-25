class ReservationsController < ApplicationController
  before_action :set_reservation, only: %i[ show update destroy ]

  # GET /reservations
  def index
    @reservations = Reservation.all

    render json: @reservations,
    include: [ :meeting_rooms, :reservation_meeting_rooms,
      :services, :reservation_services, :equipments, :reservation_equipments,
      :customer, :staff ]
  end

  # GET /reservations/1
  def show
    render json: @reservation,
    include: [ :meeting_rooms, :reservation_meeting_rooms,
      :services, :reservation_services, :equipments, :reservation_equipments,
      :customer, :staff ]
  end

  # POST /reservations
  def create
    @reservation = Reservation.new(reservation_params)

    if @reservation.save
      render json: @reservation, status: :created, location: @reservation
    else
      render json: @reservation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reservations/1
  def update
    if @reservation.update(reservation_params)
      render json: @reservation
    else
      render json: @reservation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reservations/1
  def destroy
    @reservation.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reservation
      @reservation = Reservation.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def reservation_params
      params.require(:reservation).permit(
        :guest, :check_in, :check_out, :price,
        :tracking, :queue, :status, :staff_id, :customer_id)
    end
end
