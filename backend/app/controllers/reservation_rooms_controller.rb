class ReservationRoomsController < ApplicationController
  before_action :set_reservation_room, only: %i[ show update destroy ]

  # GET /reservation_rooms
  def index
    @reservation_rooms = ReservationRoom.all

    render json: @reservation_rooms
  end

  # GET /reservation_rooms/1
  def show
    render json: @reservation_room
  end

  # POST /reservation_rooms
  def create
    @reservation_room = ReservationRoom.new(reservation_room_params)

    if @reservation_room.save
      render json: @reservation_room, status: :created, location: @reservation_room
    else
      render json: @reservation_room.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reservation_rooms/1
  def update
    if @reservation_room.update(reservation_room_params)
      render json: @reservation_room
    else
      render json: @reservation_room.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reservation_rooms/1
  def destroy
    @reservation_room.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reservation_room
      @reservation_room = ReservationRoom.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def reservation_room_params
      params.require(:reservation_room).permit(:reservation_id, :room_id)
    end
end
