class RoomsController < ApplicationController
  before_action :set_room, only: %i[ show update destroy ]

  def index
    @rooms = Room.all
    render json: @rooms, include: [ :servicerooms, :equipmentsrooms, :roomtype, :bedtype]
  end

  def show
    render json: @room, include: [ :servicerooms, :equipmentsrooms]
  end

  def create
    @room = Room.new(room_params)

    if @room.save
      render json: @room
    else
      render json: @room.errors, status: :unprocessable_entity
    end
  end

  def update
    if @room.update(room_params)
      render json: @room
    else
      render json: @room.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @room.destroy
  end

  private

    def set_room
      @room = Room.find(params[:id])
    end

    def room_params
      params.require(:room).permit(:name, :building, :guest, :price, :roomtype_id, :bedtype_id, :status)
    end
end
