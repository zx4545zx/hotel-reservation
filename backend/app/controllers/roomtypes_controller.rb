class RoomtypesController < ApplicationController
  before_action :set_roomtype, only: %i[ show update destroy ]

  def index
    @roomtypes = Roomtype.all
    render json: @roomtypes
  end

  def show
    render json: @roomtype
  end

  def create
    @roomtype = Roomtype.new(roomtype_params)

    if @roomtype.save
      render json: @roomtype
    else
      render json: @roomtype.errors, status: :unprocessable_entity
    end
  end

  def update
    if @roomtype.update(roomtype_params)
      render json: @roomtype
    else
      render json: @roomtype.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @roomtype.destroy
  end

  private
    def set_roomtype
      @roomtype = Roomtype.find(params[:id])
    end

    def roomtype_params
      params.require(:roomtype).permit(:name)
    end
end
